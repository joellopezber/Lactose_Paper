import React, { ReactNode, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ 
  children, 
  title = 'Modelo Comprensivo de Intolerancia a la Lactosa',
  description = 'Un modelo comprensivo multinivel de la intolerancia a la lactosa que reconceptualiza esta condición como un espectro multifactorial.'
}: LayoutProps) => {
  const [dropdownFundamentosOpen, setDropdownFundamentosOpen] = useState(false);
  const [dropdownRecursosOpen, setDropdownRecursosOpen] = useState(false);
  const router = useRouter();
  const fundamentosRef = useRef<HTMLLIElement>(null);
  const recursosRef = useRef<HTMLLIElement>(null);

  // Función para determinar si un enlace está activo
  const isActive = (path: string) => {
    return router.pathname === path;
  };

  // Función para determinar si el menú desplegable de Fundamentos debe mostrarse como activo
  const isFundamentosActive = () => {
    const fundamentos = [
      '/mecanismos-fisiologicos', 
      '/genetica',
      '/microbiota', 
      '/aproximaciones-terapeuticas',
      '/modelo/ciclos-retroalimentacion'
    ];
    return fundamentos.some(path => router.pathname === path || router.pathname.startsWith(path + '/'));
  };

  // Función para determinar si el menú desplegable de Recursos debe mostrarse como activo
  const isRecursosActive = () => {
    const recursos = [
      '/glosario',
      '/referencias',
      '/descargas'
    ];
    return recursos.some(path => router.pathname === path || router.pathname.startsWith(path + '/'));
  };

  // Cerrar los menús desplegables cuando se hace clic fuera de ellos
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fundamentosRef.current && !fundamentosRef.current.contains(event.target as Node)) {
        setDropdownFundamentosOpen(false);
      }
      if (recursosRef.current && !recursosRef.current.contains(event.target as Node)) {
        setDropdownRecursosOpen(false);
      }
    };

    // Cerrar menús al cambiar de ruta
    const handleRouteChange = () => {
      setDropdownFundamentosOpen(false);
      setDropdownRecursosOpen(false);
    };

    // Añadir los listeners
    document.addEventListener('mousedown', handleClickOutside);
    router.events.on('routeChangeComplete', handleRouteChange);

    // Limpiar los listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary-600">IL</span>
              <span className="text-lg font-medium hidden sm:inline">Modelo Intolerancia Lactosa</span>
            </Link>
            
            <nav>
              <ul className="flex space-x-4 sm:space-x-6">
                <li>
                  <Link 
                    href="/investigacion" 
                    className={`text-gray-700 hover:text-primary-600 transition-colors ${isActive('/investigacion') ? 'text-primary-600 font-medium' : ''}`}
                  >
                    Investigación
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/modelo" 
                    className={`text-gray-700 hover:text-primary-600 transition-colors ${isActive('/modelo') ? 'text-primary-600 font-medium' : ''}`}
                  >
                    Modelo
                  </Link>
                </li>
                <li className="relative" ref={fundamentosRef}>
                  <button 
                    className={`flex items-center text-gray-700 hover:text-primary-600 transition-colors ${isFundamentosActive() ? 'text-primary-600 font-medium' : ''}`}
                    onClick={() => {
                      setDropdownFundamentosOpen(!dropdownFundamentosOpen);
                      setDropdownRecursosOpen(false);
                    }}
                    aria-expanded={dropdownFundamentosOpen}
                  >
                    Fundamentos
                    <svg 
                      className={`ml-1 w-4 h-4 transition-transform duration-300 ${dropdownFundamentosOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div className={`absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transform origin-top transition-all duration-200 ${dropdownFundamentosOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link 
                        href="/mecanismos-fisiologicos" 
                        className={`block px-4 py-3 text-sm ${isActive('/mecanismos-fisiologicos') ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'} hover:bg-primary-50 hover:text-primary-700 transition-colors duration-150`}
                        role="menuitem"
                      >
                        Mecanismos Fisiológicos
                      </Link>
                      <Link 
                        href="/genetica" 
                        className={`block px-4 py-3 text-sm ${isActive('/genetica') ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'} hover:bg-primary-50 hover:text-primary-700 transition-colors duration-150`}
                        role="menuitem"
                      >
                        Factores Genéticos
                      </Link>
                      <Link 
                        href="/microbiota" 
                        className={`block px-4 py-3 text-sm ${isActive('/microbiota') ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'} hover:bg-primary-50 hover:text-primary-700 transition-colors duration-150`}
                        role="menuitem"
                      >
                        Microbiota Intestinal
                      </Link>
                      <Link 
                        href="/aproximaciones-terapeuticas" 
                        className={`block px-4 py-3 text-sm ${isActive('/aproximaciones-terapeuticas') ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'} hover:bg-primary-50 hover:text-primary-700 transition-colors duration-150`}
                        role="menuitem"
                      >
                        Aproximaciones Terapéuticas
                      </Link>
                      <Link 
                        href="/modelo/ciclos-retroalimentacion" 
                        className={`block px-4 py-3 text-sm ${isActive('/modelo/ciclos-retroalimentacion') ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'} hover:bg-primary-50 hover:text-primary-700 transition-colors duration-150`}
                        role="menuitem"
                      >
                        Ciclos de Retroalimentación
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="relative" ref={recursosRef}>
                  <button 
                    className={`flex items-center text-gray-700 hover:text-primary-600 transition-colors ${isRecursosActive() ? 'text-primary-600 font-medium' : ''}`}
                    onClick={() => {
                      setDropdownRecursosOpen(!dropdownRecursosOpen);
                      setDropdownFundamentosOpen(false);
                    }}
                    aria-expanded={dropdownRecursosOpen}
                  >
                    Información
                    <svg 
                      className={`ml-1 w-4 h-4 transition-transform duration-300 ${dropdownRecursosOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div className={`absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transform origin-top transition-all duration-200 ${dropdownRecursosOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link 
                        href="/glosario" 
                        className={`block px-4 py-3 text-sm ${isActive('/glosario') ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'} hover:bg-primary-50 hover:text-primary-700 transition-colors duration-150`}
                        role="menuitem"
                      >
                        Glosario Científico
                      </Link>
                      <Link 
                        href="/referencias" 
                        className={`block px-4 py-3 text-sm ${isActive('/referencias') ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'} hover:bg-primary-50 hover:text-primary-700 transition-colors duration-150`}
                        role="menuitem"
                      >
                        Referencias Bibliográficas
                      </Link>
                      <Link 
                        href="/descargas" 
                        className={`block px-4 py-3 text-sm ${isActive('/descargas') ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'} hover:bg-primary-50 hover:text-primary-700 transition-colors duration-150`}
                        role="menuitem"
                      >
                        Descargar Artículo
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link 
                    href="/recursos" 
                    className={`text-gray-700 hover:text-primary-600 transition-colors ${isActive('/recursos') ? 'text-primary-600 font-medium' : ''}`}
                  >
                    Centro de Recursos
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contacto" 
                    className={`text-gray-700 hover:text-primary-600 transition-colors ${isActive('/contacto') ? 'text-primary-600 font-medium' : ''}`}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Modelo Intolerancia Lactosa</h3>
              <p className="text-gray-400">
                Proyecto de investigación que busca reconceptualizar la intolerancia a la lactosa como un espectro multifactorial.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Navegación</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/investigacion" className="text-gray-400 hover:text-white transition-colors">
                    Investigación
                  </Link>
                </li>
                <li>
                  <Link href="/modelo" className="text-gray-400 hover:text-white transition-colors">
                    Modelo
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/glosario" className="text-gray-400 hover:text-white transition-colors">
                    Glosario
                  </Link>
                </li>
                <li>
                  <Link href="/referencias" className="text-gray-400 hover:text-white transition-colors">
                    Bibliografía
                  </Link>
                </li>
                <li>
                  <Link href="/recursos" className="text-gray-400 hover:text-white transition-colors">
                    Centro de Recursos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Privacidad</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/politica-privacidad" className="text-gray-400 hover:text-white transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/proteccion-datos" className="text-gray-400 hover:text-white transition-colors">
                    Protección de Datos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Proyecto Intolerancia a la Lactosa. Licencia de Uso Académico e Investigación.</p>
            <p className="mt-2 text-sm">Esta obra está licenciada exclusivamente para uso académico y de investigación.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 