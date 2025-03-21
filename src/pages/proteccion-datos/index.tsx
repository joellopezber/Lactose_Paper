import React from 'react';
import Layout from '@/components/Layout';

const ProteccionDatosPage = () => {
  return (
    <Layout
      title="Protección de Datos | Intolerancia a la Lactosa"
      description="Medidas de protección de datos implementadas en el portal de investigación sobre el modelo comprensivo multinivel de la intolerancia a la lactosa."
    >
      <div className="container-custom py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Protección de Datos</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-4">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">1. Compromiso con la Protección de Datos</h2>
            <p>
              En Project B612, estamos comprometidos con la protección de los datos personales de nuestros usuarios. 
              Implementamos medidas técnicas y organizativas adecuadas para garantizar un nivel de seguridad apropiado al riesgo, 
              de conformidad con el Reglamento General de Protección de Datos (RGPD) y demás normativa aplicable.
            </p>
            <p>
              Este documento complementa nuestra Política de Privacidad y detalla las medidas específicas que hemos implementado 
              para proteger sus datos y garantizar sus derechos.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">2. Principios de Protección de Datos</h2>
            <p>
              Aplicamos los siguientes principios fundamentales en el tratamiento de datos personales:
            </p>
            <ul className="mb-4">
              <li><strong>Licitud, lealtad y transparencia:</strong> Procesamos los datos de manera lícita, leal y transparente.</li>
              <li><strong>Limitación de la finalidad:</strong> Recopilamos datos solo para fines específicos, explícitos y legítimos.</li>
              <li><strong>Minimización de datos:</strong> Procesamos únicamente los datos necesarios para los fines establecidos.</li>
              <li><strong>Exactitud:</strong> Mantenemos los datos exactos y actualizados.</li>
              <li><strong>Limitación del plazo de conservación:</strong> Almacenamos los datos solo durante el tiempo necesario.</li>
              <li><strong>Integridad y confidencialidad:</strong> Garantizamos la seguridad adecuada de los datos.</li>
              <li><strong>Responsabilidad proactiva:</strong> Implementamos medidas técnicas y organizativas apropiadas.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">3. Medidas Técnicas de Protección</h2>
            <p>
              Hemos implementado las siguientes medidas técnicas para proteger sus datos:
            </p>
            <ul className="mb-4">
              <li><strong>Cifrado de datos:</strong> Utilizamos protocolos de cifrado SSL/TLS en todas las comunicaciones con nuestro sitio web.</li>
              <li><strong>Autenticación segura:</strong> Implementamos sistemas de autenticación robustos para el acceso a los sistemas de administración.</li>
              <li><strong>Copias de seguridad:</strong> Realizamos copias de seguridad periódicas para prevenir la pérdida accidental de datos.</li>
              <li><strong>Firewall y sistemas de detección de intrusiones:</strong> Protegemos nuestra infraestructura contra accesos no autorizados.</li>
              <li><strong>Actualizaciones de seguridad:</strong> Mantenemos nuestros sistemas actualizados con los últimos parches de seguridad.</li>
              <li><strong>Anonimización y seudonimización:</strong> Cuando es posible, aplicamos técnicas de anonimización o seudonimización para proteger la identidad de los usuarios.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">4. Medidas Organizativas</h2>
            <p>
              Complementamos nuestras medidas técnicas con las siguientes medidas organizativas:
            </p>
            <ul className="mb-4">
              <li><strong>Formación de personal:</strong> Todo el personal que accede a datos personales recibe formación específica en protección de datos.</li>
              <li><strong>Acceso basado en roles:</strong> Limitamos el acceso a los datos personales según la necesidad de conocimiento y las responsabilidades del puesto.</li>
              <li><strong>Acuerdos de confidencialidad:</strong> Exigimos compromisos de confidencialidad a todo el personal y colaboradores.</li>
              <li><strong>Procedimientos de respuesta a incidentes:</strong> Contamos con protocolos establecidos para responder a posibles violaciones de seguridad.</li>
              <li><strong>Auditorías periódicas:</strong> Realizamos evaluaciones regulares de nuestros sistemas y procesos.</li>
              <li><strong>Documentación de actividades de tratamiento:</strong> Mantenemos un registro de las actividades de tratamiento conforme al artículo 30 del RGPD.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">5. Evaluación de Impacto</h2>
            <p>
              Para aquellas actividades de tratamiento que pudieran suponer un alto riesgo para los derechos y libertades de las personas, 
              llevamos a cabo evaluaciones de impacto relativas a la protección de datos (EIPD), considerando:
            </p>
            <ul className="mb-4">
              <li>La naturaleza, ámbito, contexto y fines del tratamiento</li>
              <li>Los riesgos específicos para los derechos y libertades de los interesados</li>
              <li>Las medidas previstas para afrontar los riesgos</li>
              <li>Las garantías, medidas de seguridad y mecanismos para garantizar la protección de datos personales</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">6. Gestión de Violaciones de Seguridad</h2>
            <p>
              En caso de una violación de la seguridad de los datos personales, actuamos de la siguiente manera:
            </p>
            <ul className="mb-4">
              <li><strong>Detección y registro:</strong> Documentamos todos los detalles de la violación.</li>
              <li><strong>Evaluación de riesgos:</strong> Evaluamos el impacto potencial para los afectados.</li>
              <li><strong>Notificación a la autoridad de control:</strong> Si es necesario, notificamos a la autoridad de protección de datos competente en las 72 horas siguientes.</li>
              <li><strong>Comunicación a los afectados:</strong> Cuando la violación suponga un alto riesgo para los derechos y libertades, informamos a los afectados sin dilación indebida.</li>
              <li><strong>Medidas correctivas:</strong> Implementamos medidas para mitigar cualquier efecto negativo y prevenir futuras violaciones.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">7. Transferencias Internacionales de Datos</h2>
            <p>
              Para las transferencias de datos fuera del Espacio Económico Europeo (EEE), aplicamos las siguientes salvaguardas:
            </p>
            <ul className="mb-4">
              <li><strong>Decisiones de adecuación:</strong> Verificamos si el país de destino dispone de una decisión de adecuación de la Comisión Europea.</li>
              <li><strong>Cláusulas contractuales tipo:</strong> Implementamos las cláusulas contractuales tipo aprobadas por la Comisión Europea.</li>
              <li><strong>Normas corporativas vinculantes:</strong> Cuando es aplicable, utilizamos normas corporativas vinculantes aprobadas.</li>
              <li><strong>Consentimiento explícito:</strong> En casos específicos, obtenemos el consentimiento explícito de los interesados tras informarles de los posibles riesgos.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">8. Derechos de los Interesados</h2>
            <p>
              Facilitamos el ejercicio de los derechos de los interesados mediante:
            </p>
            <ul className="mb-4">
              <li><strong>Procedimientos claros:</strong> Contamos con procesos definidos para atender las solicitudes de ejercicio de derechos.</li>
              <li><strong>Plazos de respuesta:</strong> Respondemos a las solicitudes en el plazo máximo de un mes, ampliable dos meses más en casos de especial complejidad.</li>
              <li><strong>Verificación de identidad:</strong> Implementamos medidas para verificar la identidad de quien ejerce sus derechos.</li>
              <li><strong>Formato electrónico:</strong> Proporcionamos la información solicitada en un formato electrónico de uso común cuando la solicitud se realiza por este medio.</li>
              <li><strong>Gratuidad:</strong> Atendemos las solicitudes de manera gratuita, salvo en casos de solicitudes manifiestamente infundadas o excesivas.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">9. Delegado de Protección de Datos</h2>
            <p>
              Aunque nuestra actividad no requiere obligatoriamente la designación de un Delegado de Protección de Datos (DPD), 
              hemos asignado a una persona responsable de supervisar el cumplimiento de la normativa de protección de datos:
            </p>
            <ul className="mb-4">
              <li><strong>Contacto:</strong> proteccion-datos@besixdouze.pro</li>
              <li><strong>Funciones:</strong> Informar y asesorar, supervisar el cumplimiento, cooperar con la autoridad de control y actuar como punto de contacto.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">10. Formación y Concienciación</h2>
            <p>
              Consideramos que la concienciación es fundamental para la protección de datos. Por ello:
            </p>
            <ul className="mb-4">
              <li>Proporcionamos formación inicial y continua al personal sobre protección de datos</li>
              <li>Difundimos buenas prácticas en materia de seguridad de la información</li>
              <li>Actualizamos nuestras políticas y procedimientos regularmente conforme a las nuevas amenazas y cambios normativos</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">11. Medidas Específicas para Datos Sensibles</h2>
            <p>
              Aunque nuestro sitio no está diseñado para recopilar categorías especiales de datos (datos sensibles), 
              en caso de necesitar procesar este tipo de información (por ejemplo, datos de salud en el contexto de 
              investigación sobre intolerancia a la lactosa), implementamos medidas de protección reforzadas:
            </p>
            <ul className="mb-4">
              <li>Cifrado de extremo a extremo</li>
              <li>Acceso restringido solo a personal autorizado</li>
              <li>Registros de auditoría de todos los accesos</li>
              <li>Evaluaciones de impacto específicas</li>
              <li>Consentimiento explícito de los interesados</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">12. Privacidad desde el Diseño y por Defecto</h2>
            <p>
              En el desarrollo de nuestro sitio web y servicios, aplicamos los principios de:
            </p>
            <ul className="mb-4">
              <li><strong>Privacidad desde el diseño:</strong> Integramos la protección de datos desde las etapas iniciales de desarrollo.</li>
              <li><strong>Privacidad por defecto:</strong> Configuramos nuestros sistemas para que, por defecto, se procese solo la cantidad mínima necesaria de datos.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">13. Revisión y Mejora Continua</h2>
            <p>
              Nuestro sistema de protección de datos no es estático. Periódicamente:
            </p>
            <ul className="mb-4">
              <li>Revisamos la eficacia de nuestras medidas técnicas y organizativas</li>
              <li>Actualizamos nuestras políticas y procedimientos</li>
              <li>Incorporamos mejores prácticas y nuevas tecnologías de protección</li>
              <li>Realizamos pruebas de penetración y auditorías de seguridad</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">14. Consultas y Reclamaciones</h2>
            <p>
              Si tiene alguna pregunta sobre nuestras medidas de protección de datos o desea presentar una reclamación, 
              puede contactar con nosotros a través de:
            </p>
            <ul className="mb-4">
              <li><strong>Correo electrónico:</strong> proteccion-datos@besixdouze.pro</li>
              <li><strong>Dirección postal:</strong> Project B612, Ordino, Andorra</li>
              <li><strong>Teléfono:</strong> +376 359 366</li>
            </ul>
            <p>
              También tiene derecho a presentar una reclamación ante la autoridad de protección de datos competente 
              si considera que el tratamiento de sus datos personales infringe la normativa aplicable.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProteccionDatosPage; 