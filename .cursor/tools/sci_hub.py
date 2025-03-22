#!/usr/bin/env python3
'''
Sci-Hub y Multi-Repositorio Downloader
----
Descripción:

Este script toma un DOI/URL y descarga el artículo científico 
correspondiente intentando primero repositorios de acceso abierto
y luego usando Sci-Hub como respaldo.

Repositorios soportados:
- ScienceDirect
- PubMed Central
- arXiv
- bioRxiv
- medRxiv
- Sci-Hub (como respaldo)

El proceso sigue estos pasos:
1. Identifica el tipo de repositorio o DOI
2. Intenta descargar desde el repositorio original
3. Si falla, intenta otros repositorios compatibles
4. Si todo falla, usa Sci-Hub como último recurso

Versión: 4.3
Fecha: 19 de marzo de 2024
'''
from __future__ import print_function
import argparse
import os
import platform
import re
import time
import webbrowser as wbb
import sys
from bs4 import BeautifulSoup as bs
import requests
import urllib3
import urllib.parse
import logging
from urllib.parse import urljoin

# Deshabilitar advertencias SSL
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# Configurar logging
logging.basicConfig(level=logging.INFO, format='%(message)s')
logger = logging.getLogger('article_downloader')

# Advertencia para usuarios de Windows
if platform.system() == 'Windows':
    print("\nADVERTENCIA: En Windows, asegúrate de ejecutar este script como administrador\n" +
          "para evitar problemas de permisos al descargar archivos.\n")

class ArticleDownloader:
    def __init__(self, download_dir=None):
        self.session = requests.Session()
        # Simular un navegador real
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
        })
        
        # Espejos de Sci-Hub verificados
        self.mirrors = [
            "https://sci-hub.se/",
            "https://sci-hub.st/",
            "https://sci-hub.ru/",
            "https://sci-hub.red/",
            "https://sci-hub.box/"
        ]
        
        # Repositorios de acceso abierto
        self.repositories = {
            "sciencedirect": "https://www.sciencedirect.com/",
            "pubmed": "https://www.ncbi.nlm.nih.gov/pmc/",
            "arxiv": "https://arxiv.org/",
            "biorxiv": "https://www.biorxiv.org/",
            "medrxiv": "https://www.medrxiv.org/"
        }
        
        # Directorio de descarga
        self.download_dir = download_dir if download_dir else os.path.join(os.getcwd(), "downloads")
        if not os.path.exists(self.download_dir):
            os.makedirs(self.download_dir)
            print(f"Creado directorio {self.download_dir}")
    
    def validate_sci_hub_mirrors(self):
        """Validar cuáles espejos de Sci-Hub están funcionando"""
        valid_mirrors = []
        print(f"Encontrados {len(self.mirrors)} espejos posibles de Sci-Hub")
        
        for mirror in self.mirrors:
            print(f"Validando {mirror}...")
            try:
                # Configurar timeout y verificación SSL
                response = self.session.get(
                    mirror, 
                    timeout=10, 
                    verify=False,  # Deshabilitar verificación SSL
                    headers={
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124'
                    }
                )
                
                if response.status_code == 200 and 'sci-hub' in response.text.lower():
                    valid_mirrors.append(mirror)
                    print(f"✓ {mirror} validado")
                else:
                    print(f"✗ {mirror} no es una página válida de Sci-Hub")
            except Exception as e:
                print(f"✗ {mirror} error de conexión: {str(e)}")
        
        print(f"Validados {len(valid_mirrors)} espejos de Sci-Hub\n")
        return valid_mirrors
    
    def identify_repository(self, identifier):
        """Identificar el tipo de repositorio basado en el DOI o URL"""
        # Si es una URL completa
        if identifier.startswith('http'):
            parsed_url = urllib.parse.urlparse(identifier)
            domain = parsed_url.netloc.lower()
            
            if 'sciencedirect.com' in domain:
                return "sciencedirect", identifier
            elif 'ncbi.nlm.nih.gov' in domain or 'pubmed' in domain:
                return "pubmed", identifier
            elif 'arxiv.org' in domain:
                return "arxiv", identifier
            elif 'biorxiv.org' in domain:
                return "biorxiv", identifier
            elif 'medrxiv.org' in domain:
                return "medrxiv", identifier
            else:
                # Extraer DOI de la URL si es posible
                doi_match = re.search(r'(10\.\d{4,}(?:\.\d+)*\/\S+)', identifier)
                if doi_match:
                    return "doi", doi_match.group(0).rstrip('/.>')
                return "unknown", identifier
        
        # Si parece un DOI
        elif identifier.startswith('10.'):
            return "doi", identifier
        
        # Si es un identificador de arXiv
        elif re.match(r'\d{4}\.\d{4,}(v\d+)?', identifier) or identifier.startswith('arXiv:'):
            identifier = identifier.replace('arXiv:', '')
            return "arxiv", identifier
        
        # Si parece un identificador de bioRxiv o medRxiv
        elif re.match(r'\d{4}\.\d{2}\.\d{2}\.\d+', identifier):
            # Comprobamos si hay algún prefijo que indique el repositorio
            if identifier.lower().startswith('biorxiv:'):
                return "biorxiv", identifier.replace('biorxiv:', '')
            elif identifier.lower().startswith('medrxiv:'):
                return "medrxiv", identifier.replace('medrxiv:', '')
            else:
                # Por defecto asumimos bioRxiv, pero intentaremos con ambos en download_article
                return "biorxiv", identifier
        
        else:
            return "unknown", identifier
    
    def try_sciencedirect(self, url):
        """Intentar descargar un artículo desde ScienceDirect"""
        try:
            logger.info(f"Intentando acceder a ScienceDirect: {url}")
            
            # Extraer el ID del artículo de la URL
            pii_match = re.search(r'pii/([^?]+)', url)
            if pii_match:
                pii = pii_match.group(1)
            else:
                logger.info("No se pudo extraer el ID del artículo de la URL")
                return None, None
                
            # Para ScienceDirect, a veces podemos acceder al PDF usando esta URL
            pdf_url = f"https://www.sciencedirect.com/science/article/pii/{pii}/pdf"
            
            # Intentar obtener el PDF directamente
            pdf_response = self.session.get(pdf_url, timeout=30)
            if pdf_response.status_code == 200 and pdf_response.headers.get('Content-Type', '').startswith('application/pdf'):
                filename = f"sciencedirect_{pii}.pdf"
                return pdf_response.content, filename
            
            # Si no funciona, intentar la página del artículo y buscar el enlace al PDF
            response = self.session.get(url, timeout=30)
            if response.status_code != 200:
                logger.info(f"Error al acceder a ScienceDirect: {response.status_code}")
                return None, None
                
            soup = bs(response.text, 'html.parser')
            
            # Buscar enlaces al PDF
            pdf_links = soup.select('a.pdf-download-btn-link, a.download-link[href*="pdf"], a[href*="/pdf"]')
            if pdf_links:
                pdf_url = pdf_links[0].get('href')
                if not pdf_url.startswith('http'):
                    pdf_url = f"https://www.sciencedirect.com{pdf_url}"
                    
                pdf_response = self.session.get(pdf_url, timeout=30)
                if pdf_response.status_code == 200:
                    filename = f"sciencedirect_{pii}.pdf"
                    return pdf_response.content, filename
            
            logger.info("No se pudo obtener el PDF desde ScienceDirect")
            return None, None
            
        except Exception as e:
            logger.info(f"Error al intentar descargar desde ScienceDirect: {str(e)}")
            return None, None
    
    def try_pubmed(self, url):
        """Intentar descargar un artículo desde PubMed Central"""
        try:
            logger.info(f"Intentando acceder a PubMed: {url}")
            
            # Extraer PMID o PMCID
            pmid_match = re.search(r'\/(\d+)\/?$', url)
            if pmid_match:
                pmid = pmid_match.group(1)
            else:
                pmid_match = re.search(r'PMC(\d+)', url)
                if pmid_match:
                    pmid = f"PMC{pmid_match.group(1)}"
                else:
                    logger.info("No se pudo extraer el ID del artículo de la URL")
                    return None, None
            
            # Verificar si está disponible en PMC
            pmc_url = f"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC{pmid}/pdf/"
            pdf_response = self.session.get(pmc_url, timeout=30)
            
            if pdf_response.status_code == 200 and pdf_response.headers.get('Content-Type', '').startswith('application/pdf'):
                filename = f"pubmed_{pmid}.pdf"
                return pdf_response.content, filename
                
            # Si no se encuentra directamente, buscar en la página del artículo
            article_url = f"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC{pmid}/"
            response = self.session.get(article_url, timeout=30)
            
            if response.status_code == 200:
                soup = bs(response.text, 'html.parser')
                pdf_links = soup.select('a[href*="pdf"]')
                
                if pdf_links:
                    pdf_url = pdf_links[0].get('href')
                    if not pdf_url.startswith('http'):
                        pdf_url = f"https://www.ncbi.nlm.nih.gov{pdf_url}"
                        
                    pdf_response = self.session.get(pdf_url, timeout=30)
                    if pdf_response.status_code == 200:
                        filename = f"pubmed_{pmid}.pdf"
                        return pdf_response.content, filename
            
            logger.info("No se pudo obtener el PDF desde PubMed")
            return None, None
            
        except Exception as e:
            logger.info(f"Error al intentar descargar desde PubMed: {str(e)}")
            return None, None
    
    def try_arxiv(self, identifier):
        """Intentar descargar un artículo desde arXiv"""
        try:
            logger.info(f"Intentando acceder a arXiv con identificador: {identifier}")
            
            # Asegurarse de que el identificador esté en el formato correcto
            identifier = identifier.replace('arXiv:', '').strip()
            
            # Construir URL del PDF
            pdf_url = f"https://arxiv.org/pdf/{identifier}.pdf"
            
            # Intentar descargar el PDF
            pdf_response = self.session.get(pdf_url, timeout=30)
            
            if pdf_response.status_code == 200 and pdf_response.headers.get('Content-Type', '').startswith('application/pdf'):
                filename = f"arxiv_{identifier.replace('/', '_')}.pdf"
                return pdf_response.content, filename
            
            logger.info(f"No se pudo obtener el PDF desde arXiv: {pdf_response.status_code}")
            return None, None
            
        except Exception as e:
            logger.info(f"Error al intentar descargar desde arXiv: {str(e)}")
            return None, None
    
    def try_biorxiv(self, url):
        """Intentar descargar un artículo desde bioRxiv"""
        try:
            logger.info(f"Intentando acceder a bioRxiv: {url}")
            
            # Extraer el ID del artículo de la URL
            article_id_match = re.search(r'content/(?:early/)?(\d+/\d+/\d+\.\d+)', url)
            if article_id_match:
                article_id = article_id_match.group(1)
            else:
                logger.info("No se pudo extraer el ID del artículo de la URL")
                return None, None
            
            # Construir URL del PDF
            pdf_url = f"https://www.biorxiv.org/content/{article_id}.full.pdf"
            
            # Intentar descargar el PDF
            pdf_response = self.session.get(pdf_url, timeout=30)
            
            if pdf_response.status_code == 200 and pdf_response.headers.get('Content-Type', '').startswith('application/pdf'):
                filename = f"biorxiv_{article_id.replace('/', '_')}.pdf"
                return pdf_response.content, filename
            
            logger.info(f"No se pudo obtener el PDF desde bioRxiv: {pdf_response.status_code}")
            return None, None
            
        except Exception as e:
            logger.info(f"Error al intentar descargar desde bioRxiv: {str(e)}")
            return None, None
    
    def try_medrxiv(self, url):
        """Intentar descargar un artículo desde medRxiv"""
        try:
            logger.info(f"Intentando acceder a medRxiv: {url}")
            
            # Extraer el ID del artículo de la URL (formato similar a bioRxiv)
            article_id_match = re.search(r'content/(?:early/)?(\d+/\d+/\d+\.\d+)', url)
            if article_id_match:
                article_id = article_id_match.group(1)
            else:
                logger.info("No se pudo extraer el ID del artículo de la URL")
                return None, None
            
            # Construir URL del PDF
            pdf_url = f"https://www.medrxiv.org/content/{article_id}.full.pdf"
            
            # Intentar descargar el PDF
            pdf_response = self.session.get(pdf_url, timeout=30)
            
            if pdf_response.status_code == 200 and pdf_response.headers.get('Content-Type', '').startswith('application/pdf'):
                filename = f"medrxiv_{article_id.replace('/', '_')}.pdf"
                return pdf_response.content, filename
            
            logger.info(f"No se pudo obtener el PDF desde medRxiv: {pdf_response.status_code}")
            return None, None
            
        except Exception as e:
            logger.info(f"Error al intentar descargar desde medRxiv: {str(e)}")
            return None, None
    
    def extract_pdf_url(self, html_content, base_url):
        """
        Extrae la URL del PDF de la página HTML de Sci-Hub usando múltiples métodos.
        """
        logging.info("Analizando página HTML para encontrar el PDF...")
        soup = bs(html_content, 'html.parser')
        
        # Método 1: Buscar iframe con PDF (mejorado)
        logging.info("Método 1: Buscando iframe con PDF...")
        iframes = soup.find_all('iframe')
        for iframe in iframes:
            src = iframe.get('src', '')
            if src:
                # Buscar patrones comunes de PDF en src
                if any(ext in src.lower() for ext in ['.pdf', '/pdf/', 'download', 'view']):
                    url = urljoin(base_url, src)
                    logging.info(f"Encontrada URL en iframe: {url}")
                    return url
            
            # Buscar en atributos data-*
            for attr in iframe.attrs:
                if attr.startswith('data-') and any(ext in iframe[attr].lower() for ext in ['.pdf', '/pdf/', 'download']):
                    url = urljoin(base_url, iframe[attr])
                    logging.info(f"Encontrada URL en atributo data- de iframe: {url}")
                    return url

        # Método 2: Buscar enlaces directos a PDF (mejorado)
        logging.info("Método 2: Buscando enlaces directos a PDF...")
        pdf_patterns = [
            r'https?://[^\s<>"]+?\.pdf',
            r'https?://[^\s<>"]+?/pdf/[^\s<>"]+',
            r'https?://[^\s<>"]+?/download/[^\s<>"]+',
            r'https?://[^\s<>"]+?/view/[^\s<>"]+',
            r'https?://[^\s<>"]+?/article/[^\s<>"]+\.pdf',
            r'https?://[^\s<>"]+?/fulltext/[^\s<>"]+',
            r'https?://[^\s<>"]+?/content/[^\s<>"]+\.pdf',
            r'https?://[^\s<>"]+?/document/[^\s<>"]+\.pdf'
        ]
        
        for link in soup.find_all(['a', 'link']):
            href = link.get('href', '')
            for pattern in pdf_patterns:
                if re.search(pattern, href, re.I):
                    url = urljoin(base_url, href)
                    logging.info(f"Encontrada URL en enlace: {url}")
                    return url

        # Método 3: Buscar JavaScript dinámico
        logging.info("Método 3: Buscando JavaScript dinámico...")
        scripts = soup.find_all('script')
        js_patterns = [
            r'(?:location\.href|window\.location)\s*=\s*[\'"]([^\'"]+=pdf[^\'"]*)[\'"]',
            r'downloadPDF\([\'"]([^\'"]+)[\'"]\)',
            r'viewPDF\([\'"]([^\'"]+)[\'"]\)',
            r'openPDF\([\'"]([^\'"]+)[\'"]\)',
            r'PDFObject\.embed\([\'"]([^\'"]+)[\'"]\)',
            r'pdf_url\s*=\s*[\'"]([^\'"]+)[\'"]'
        ]
        
        for script in scripts:
            script_text = script.string if script.string else ''
            for pattern in js_patterns:
                matches = re.findall(pattern, script_text)
                if matches:
                    url = urljoin(base_url, matches[0])
                    logging.info(f"Encontrada URL en JavaScript: {url}")
                    return url

        # Método 4: Buscar elementos con data attributes (mejorado)
        logging.info("Método 4: Buscando elementos con data attributes...")
        data_attrs = [
            'data-pdf-url',
            'data-download-url',
            'data-file-url',
            'data-document-url',
            'data-src'
        ]
        
        for attr in data_attrs:
            elements = soup.find_all(attrs={attr: True})
            for element in elements:
                url = element[attr]
                if any(ext in url.lower() for ext in ['.pdf', '/pdf/', 'download']):
                    url = urljoin(base_url, url)
                    logging.info(f"Encontrada URL en {attr}: {url}")
                    return url

        # Método 5: Buscar meta tags (mejorado)
        # Método 3: Buscar botones de descarga
        logging.info("Método 3: Buscando botones de descarga...")
        buttons = soup.find_all(['button', 'a'], {
            'onclick': re.compile(r'(download|save|get|view).*pdf', re.I)
        })
        for button in buttons:
            onclick = button.get('onclick', '')
            urls = re.findall(r'https?://[^\s\'"]+', onclick)
            if urls:
                url = urljoin(base_url, urls[0])
                logging.info(f"Encontrada URL en botón: {url}")
                return url

        # Método 4: Buscar div con enlace al PDF
        logging.info("Método 4: Buscando div con enlace al PDF...")
        for div in soup.find_all('div', {'class': re.compile(r'(pdf|download|article)', re.I)}):
            links = div.find_all('a')
            for link in links:
                href = link.get('href', '')
                if any(re.search(pattern, href, re.I) for pattern in pdf_patterns):
                    url = urljoin(base_url, href)
                    logging.info(f"Encontrada URL en div: {url}")
                    return url

        # Método 5: Buscar meta tags
        logging.info("Método 5: Buscando meta tags...")
        meta_tags = soup.find_all('meta', {'content': re.compile(r'https?://.*?\.pdf', re.I)})
        for tag in meta_tags:
            content = tag.get('content', '')
            urls = re.findall(r'https?://[^\s<>"]+?\.pdf', content)
            if urls:
                url = urljoin(base_url, urls[0])
                logging.info(f"Encontrada URL en meta tag: {url}")
                return url

        # Método 6: Buscar en el texto de la página
        logging.info("Método 6: Buscando en el texto de la página...")
        text = soup.get_text()
        for pattern in pdf_patterns:
            urls = re.findall(pattern, text)
            if urls:
                url = urljoin(base_url, urls[0])
                logging.info(f"Encontrada URL en texto: {url}")
                return url
            
        # Método 7: Buscar elementos con data attributes
        logging.info("Método 7: Buscando elementos con data attributes...")
        elements = soup.find_all(attrs={"data-url": True})
        for element in elements:
            data_url = element.get('data-url', '')
            if any(re.search(pattern, data_url, re.I) for pattern in pdf_patterns):
                url = urljoin(base_url, data_url)
                logging.info(f"Encontrada URL en data attribute: {url}")
                return url
            
        # Método 8: Buscar scripts que contengan URLs de PDF
        logging.info("Método 8: Buscando en scripts...")
        scripts = soup.find_all('script')
        for script in scripts:
            script_text = script.string if script.string else ''
            for pattern in pdf_patterns:
                urls = re.findall(pattern, script_text)
                if urls:
                    url = urljoin(base_url, urls[0])
                    logging.info(f"Encontrada URL en script: {url}")
                    return url

        logging.warning("No se encontró ninguna URL de PDF")
        return None

    def download_from_sci_hub(self, identifier):
        """Descargar artículo desde Sci-Hub con manejo mejorado"""
        valid_mirrors = self.validate_sci_hub_mirrors()
        
        for mirror in valid_mirrors:
            try:
                url = mirror + identifier
                logger.info(f"\nDescargando HTML desde {url}...")
                
                # Configurar timeout y verificación SSL
                response = self.session.get(
                    url, 
                    timeout=30,
                    verify=False,  # Deshabilitar verificación SSL
                    headers={
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124'
                    }
                )
                
                if response.status_code != 200:
                    continue
                
                pdf_url = self.extract_pdf_url(response.text, url)
                if not pdf_url:
                    continue
                
                # Intentar descargar el PDF
                pdf_response = self.session.get(
                    pdf_url, 
                    timeout=30,
                    verify=False,  # Deshabilitar verificación SSL
                    headers={
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124'
                    }
                )
                
                if pdf_response.status_code == 200:
                    # Verificar si es un PDF válido
                    content = pdf_response.content
                    if content.startswith(b'%PDF-'):
                        # Generar nombre de archivo basado en el DOI
                        filename = re.sub(r'[^\w\-\.]', '_', identifier) + '.pdf'
                        return content, filename
                
            except Exception as e:
                logger.info(f"Error con {mirror}: {str(e)}")
                continue
        
        return None, None
    
    def extract_filename(self, identifier, response):
        """Extraer nombre de archivo del Content-Disposition o crear uno basado en el DOI"""
        # Intentar extraer del Content-Disposition
        if 'Content-Disposition' in response.headers:
            cd = response.headers['Content-Disposition']
            filename_match = re.findall('filename="(.+)"', cd)
            if filename_match:
                return filename_match[0]
        
        # Si no es posible, crear uno basado en el identificador
        safe_identifier = identifier.replace('/', '_').replace(':', '_')
        return f"article_{safe_identifier}.pdf"
    
    def verify_pdf(self, content):
        """Verificar que el contenido sea realmente un PDF"""
        if content and content.startswith(b'%PDF-'):
            return True
        return False
    
    def download_article(self, identifier):
        """Método principal para descargar artículos desde múltiples fuentes"""
        # Identificar el tipo de repositorio
        repo_type, clean_identifier = self.identify_repository(identifier)
        
        print(f"\nIntentando descargar artículo desde múltiples fuentes...")
        print(f"Tipo identificado: {repo_type}")
        print(f"Identificador limpio: {clean_identifier}")
        
        # Primero intentar repositorios de acceso abierto
        pdf_content = None
        filename = None
        
        # Intentar primero con el repositorio identificado
        if repo_type == "sciencedirect":
            print(f"Intentando ScienceDirect...")
            pdf_content, filename = self.try_sciencedirect(clean_identifier)
        elif repo_type == "pubmed":
            print(f"Intentando PubMed...")
            pdf_content, filename = self.try_pubmed(clean_identifier)
        elif repo_type == "arxiv":
            print(f"Intentando arXiv...")
            pdf_content, filename = self.try_arxiv(clean_identifier)
        elif repo_type == "biorxiv":
            print(f"Intentando bioRxiv...")
            pdf_content, filename = self.try_biorxiv(clean_identifier)
        elif repo_type == "medrxiv":
            print(f"Intentando medRxiv...")
            pdf_content, filename = self.try_medrxiv(clean_identifier)
        
        # Si no hay éxito y tenemos un DOI, intentar con todos los repositorios principales
        if pdf_content is None and (repo_type == "doi" or "10." in clean_identifier):
            print(f"Intentando con todos los repositorios principales usando el identificador...")
            
            # Extraer DOI del identificador si no es un DOI directo
            doi_match = re.search(r'(10\.\d{4,}(?:\.\d+)*\/\S+)', clean_identifier)
            if doi_match:
                doi = doi_match.group(0).rstrip('/.>')
            else:
                doi = clean_identifier
            
            # Intentar ScienceDirect
            if repo_type != "sciencedirect":
                print(f"Intentando ScienceDirect con DOI...")
                scidir_url = f"https://www.sciencedirect.com/science/article/abs/pii/{doi.replace('/', '')}"
                pdf_content, filename = self.try_sciencedirect(scidir_url)
            
            # Intentar PubMed
            if pdf_content is None and repo_type != "pubmed":
                print(f"Intentando PubMed con DOI...")
                pubmed_url = f"https://www.ncbi.nlm.nih.gov/pmc/articles/{doi}/"
                pdf_content, filename = self.try_pubmed(pubmed_url)
        
        # Si no funciona, intentar con Sci-Hub (para cualquier tipo o si falló el anterior)
        if pdf_content is None:
            print(f"No se pudo obtener desde los repositorios principales. Intentando con Sci-Hub...")
            
            if repo_type == "doi":
                doi = clean_identifier
            else:
                # Intentar extraer DOI del identificador si no es un DOI directo
                doi_match = re.search(r'(10\.\d{4,}(?:\.\d+)*\/\S+)', clean_identifier)
                if doi_match:
                    doi = doi_match.group(0).rstrip('/.>')
                else:
                    doi = clean_identifier
            
            # Validar los espejos de Sci-Hub
            valid_mirrors = self.validate_sci_hub_mirrors()
            
            # Intentar descargar desde Sci-Hub
            pdf_content, filename = self.download_from_sci_hub(doi)
        
        # Si se obtuvo el contenido, guardar el PDF
        if pdf_content and self.verify_pdf(pdf_content):
            if not filename:
                filename = self.extract_filename(clean_identifier, {"headers": {}})
                
            file_path = os.path.join(self.download_dir, filename)
            with open(file_path, 'wb') as f:
                f.write(pdf_content)
            
            print(f"\n✓ Artículo descargado exitosamente como: {file_path}")
            print(f"  Tamaño: {len(pdf_content) / 1024:.1f} KB")
            return file_path
        else:
            print("\n✗ No se pudo descargar el artículo desde ninguna fuente.")
            print("Sugerencias:")
            print("1. Verifique que el DOI o URL sea correcto")
            print("2. Intente más tarde cuando los servidores estén disponibles")
            print("3. Pruebe con un enfoque manual visitando la página web del repositorio o sci-hub.se en su navegador")
            return None

def main():
    """Función principal"""
    parser = argparse.ArgumentParser(description="Descarga artículos científicos desde múltiples repositorios y Sci-Hub")
    parser.add_argument('identifier', metavar='IDENTIFIER', type=str,
                        help='DOI, URL o identificador del artículo a descargar (ej: 10.1038/nature09410, https://www.sciencedirect.com/...)')
    parser.add_argument('--download-dir', '-d', metavar='DIRECTORY', type=str,
                        help='Directorio donde se guardarán los archivos descargados (por defecto: "./downloads")')
    parser.add_argument('--open', '-o', action='store_true',
                        help='Abrir el PDF después de la descarga')
    args = parser.parse_args()
    
    # Crear downloader
    downloader = ArticleDownloader(args.download_dir)
    
    # Descargar artículo
    file_path = downloader.download_article(args.identifier)
    
    # Abrir PDF si se indica y se descargó correctamente
    if file_path and args.open:
        try:
            if platform.system() == 'Darwin':
                import subprocess
                subprocess.run(['open', file_path], check=True)
            elif platform.system() == 'Windows':
                os.startfile(file_path)
            else:
                import subprocess
                subprocess.run(['xdg-open', file_path], check=True)
            print(f"✓ Abriendo {file_path}")
        except Exception as e:
            print(f"Error al abrir el archivo: {str(e)}")

if __name__ == "__main__":
    main()
