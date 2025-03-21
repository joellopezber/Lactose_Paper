import React from 'react';
import Layout from '@/components/Layout';

const PoliticaPrivacidadPage = () => {
  return (
    <Layout
      title="Política de Privacidad | Intolerancia a la Lactosa"
      description="Política de privacidad del portal de investigación sobre el modelo comprensivo multinivel de la intolerancia a la lactosa."
    >
      <div className="container-custom py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-4">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">1. Introducción</h2>
            <p>
              En Project B612 ("nosotros", "nuestro" o "nos"), respetamos su privacidad y nos comprometemos a proteger sus datos personales. 
              Esta política de privacidad explica cómo recopilamos, utilizamos, compartimos y protegemos la información obtenida a través de nuestro sitio web 
              dedicado al Proyecto de Investigación sobre Intolerancia a la Lactosa ("el Sitio").
            </p>
            <p>
              Nuestro Sitio es una plataforma educativa e informativa diseñada para divulgar conocimiento científico sobre el modelo comprensivo 
              multinivel de la intolerancia a la lactosa, y no está dirigida a recopilar información personal sensible. Sin embargo, tomamos todas 
              las medidas necesarias para cumplir con el Reglamento General de Protección de Datos (RGPD) y otras legislaciones de privacidad aplicables.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">2. Responsable del Tratamiento</h2>
            <p>
              El responsable del tratamiento de sus datos personales es:
            </p>
            <ul className="mb-4">
              <li><strong>Nombre/Entidad:</strong> Joel López Bercianos - Project B612</li>
              <li><strong>Dirección:</strong> Ordino, Andorra</li>
              <li><strong>Correo electrónico:</strong> jlopez@besixdouze.pro</li>
              <li><strong>Teléfono:</strong> +376 359 366</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">3. Datos que Recopilamos</h2>
            <p>
              Podemos recopilar y procesar los siguientes tipos de información:
            </p>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">3.1. Información que usted nos proporciona:</h3>
            <ul className="mb-4">
              <li>Datos de contacto (como nombre, dirección de correo electrónico) cuando utiliza nuestro formulario de contacto</li>
              <li>Información proporcionada en comunicaciones con nosotros</li>
              <li>Consultas o solicitudes que realiza a través del Sitio</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2 text-gray-800">3.2. Información recopilada automáticamente:</h3>
            <ul className="mb-4">
              <li>Información técnica como dirección IP, tipo de navegador, proveedor de servicios de Internet, páginas visitadas</li>
              <li>Datos de uso y navegación anónimos para análisis estadístico</li>
              <li>Cookies y tecnologías similares (consulte nuestra Política de Cookies para más detalles)</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">4. Finalidad y Base Legal del Tratamiento</h2>
            <p>
              Tratamos sus datos personales para los siguientes fines y de acuerdo con las siguientes bases legales:
            </p>
            <ul className="mb-4">
              <li><strong>Gestión de consultas y solicitudes:</strong> Cuando nos contacta a través del formulario de contacto (base legal: su consentimiento e interés legítimo)</li>
              <li><strong>Mejora del Sitio:</strong> Análisis de uso para mejorar la experiencia del usuario (base legal: interés legítimo)</li>
              <li><strong>Investigación científica:</strong> Si decide participar voluntariamente en estudios o encuestas (base legal: su consentimiento explícito)</li>
              <li><strong>Cumplimiento legal:</strong> Cumplir con obligaciones legales cuando sea necesario</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">5. Conservación de Datos</h2>
            <p>
              Conservamos sus datos personales solo durante el tiempo necesario para cumplir con los fines para los que se recopilaron, 
              incluido el cumplimiento de requisitos legales, contables o de informes.
            </p>
            <p>
              Para determinar el período de conservación apropiado, consideramos la cantidad, naturaleza y sensibilidad de los datos personales, 
              el riesgo potencial de daño por uso o divulgación no autorizados, los fines para los que procesamos los datos y si podemos lograr 
              esos fines a través de otros medios.
            </p>
            <p>
              Los datos de contacto proporcionados a través del formulario de contacto se conservarán por un máximo de 2 años desde la última interacción.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">6. Destinatarios de los Datos</h2>
            <p>
              No compartimos sus datos personales con terceros, excepto en las siguientes circunstancias:
            </p>
            <ul className="mb-4">
              <li><strong>Proveedores de servicios:</strong> Podemos compartir datos con proveedores que nos ayudan a operar nuestro sitio (como servicios de hosting, análisis web)</li>
              <li><strong>Requisitos legales:</strong> Cuando estemos obligados por ley o para proteger nuestros derechos legales</li>
              <li><strong>Con su consentimiento:</strong> Cuando nos haya dado su consentimiento explícito para compartir información</li>
            </ul>
            <p>
              Todos los proveedores de servicios están obligados a tomar medidas de seguridad adecuadas para proteger sus datos personales 
              de acuerdo con nuestras políticas y la legislación aplicable.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">7. Transferencias Internacionales</h2>
            <p>
              Procuramos que sus datos se procesen dentro del Espacio Económico Europeo (EEE). Sin embargo, algunos de nuestros proveedores 
              de servicios pueden estar ubicados fuera del EEE. Cuando realizamos tales transferencias, nos aseguramos de que existan garantías 
              adecuadas para proteger sus datos, como cláusulas contractuales estándar aprobadas por la Comisión Europea o mecanismos 
              de certificación como el Privacy Shield.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">8. Sus Derechos</h2>
            <p>
              Bajo el RGPD y otras leyes de protección de datos aplicables, usted tiene los siguientes derechos:
            </p>
            <ul className="mb-4">
              <li><strong>Acceso:</strong> Derecho a solicitar una copia de sus datos personales</li>
              <li><strong>Rectificación:</strong> Derecho a corregir datos inexactos o incompletos</li>
              <li><strong>Supresión:</strong> Derecho a solicitar la eliminación de sus datos personales en determinadas circunstancias</li>
              <li><strong>Limitación:</strong> Derecho a solicitar la restricción del procesamiento de sus datos</li>
              <li><strong>Portabilidad:</strong> Derecho a recibir sus datos en un formato estructurado y transmitirlos a otro responsable</li>
              <li><strong>Oposición:</strong> Derecho a oponerse al procesamiento basado en intereses legítimos</li>
              <li><strong>Retirada del consentimiento:</strong> Derecho a retirar el consentimiento en cualquier momento cuando el procesamiento se base en este</li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, contacte con nosotros mediante los datos de contacto proporcionados anteriormente. 
              Responderemos a su solicitud dentro del plazo legal establecido (generalmente un mes).
            </p>
            <p>
              También tiene derecho a presentar una reclamación ante la autoridad de protección de datos competente si considera que el tratamiento 
              de sus datos personales infringe la normativa aplicable.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">9. Seguridad de los Datos</h2>
            <p>
              Hemos implementado medidas de seguridad apropiadas para proteger sus datos personales contra pérdida accidental, acceso o 
              divulgación no autorizados, alteración y destrucción. Estas medidas incluyen:
            </p>
            <ul className="mb-4">
              <li>Almacenamiento seguro y encriptado de datos</li>
              <li>Acceso limitado a personal autorizado bajo estricta confidencialidad</li>
              <li>Sistemas de protección frente a vulnerabilidades técnicas</li>
              <li>Evaluaciones periódicas de seguridad</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">10. Cookies y Tecnologías Similares</h2>
            <p>
              Nuestro sitio utiliza cookies y tecnologías similares para mejorar su experiencia y analizar el tráfico del sitio. 
              Para más información sobre cómo utilizamos estas tecnologías, consulte nuestra Política de Cookies.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">11. Enlaces a Sitios de Terceros</h2>
            <p>
              Nuestro Sitio puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad 
              o el contenido de estos sitios. Le recomendamos revisar las políticas de privacidad de cualquier sitio que visite.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">12. Cambios en Esta Política</h2>
            <p>
              Podemos actualizar esta política de privacidad periódicamente para reflejar cambios en nuestras prácticas o por 
              otros motivos operativos, legales o regulatorios. Le informaremos de cualquier cambio sustancial publicando la nueva 
              política de privacidad en esta página con una notificación visible.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">13. Contacto</h2>
            <p>
              Si tiene preguntas, comentarios o solicitudes relacionadas con esta política de privacidad o el tratamiento de sus datos 
              personales, no dude en ponerse en contacto con nosotros a través de los datos proporcionados en la sección "Responsable del Tratamiento".
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PoliticaPrivacidadPage; 