import React from 'react';
import Layout from '@/components/Layout';

const ContactoPage = () => {
  return (
    <Layout
      title="Contacto | Intolerancia a la Lactosa"
      description="Ponte en contacto con el equipo de investigación del proyecto sobre el modelo comprensivo multinivel de la intolerancia a la lactosa."
    >
      <div className="container-custom py-12">
        <h1 className="mb-8">Contacta con Nosotros</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="tu.email@ejemplo.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Asunto de tu mensaje"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Mensaje</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Información de Contacto</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">jlopez@besixdouze.pro</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-gray-600">+376 359 366</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-gray-600">
                      Joel López Bercianos<br />
                      Project B612<br />
                      Ordino, Andorra
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Horario de Atención</h2>
              <p className="text-gray-700 mb-3">
                Nuestro equipo está disponible para responder a tus consultas en el siguiente horario:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Lunes a Viernes:</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados:</span>
                  <span>10:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingos:</span>
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2">¿Cómo puedo colaborar con el proyecto de investigación?</h3>
              <p className="text-gray-700">
                Existen varias formas de colaborar con nuestro proyecto, desde participar en estudios hasta difundir los hallazgos. 
                Para más información, por favor contáctanos a través del formulario o por correo electrónico.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">¿Ofrecéis consultas personalizadas sobre intolerancia a la lactosa?</h3>
              <p className="text-gray-700">
                No proporcionamos asesoramiento médico individual. Recomendamos consultar con profesionales sanitarios para el diagnóstico 
                y tratamiento de condiciones médicas. Nuestro objetivo es difundir información científica actualizada.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">¿Puedo utilizar vuestros materiales en mi práctica clínica o docente?</h3>
              <p className="text-gray-700">
                Sí, nuestros materiales están disponibles para uso educativo y clínico, siempre que se cite adecuadamente la fuente. 
                Para usos más extensivos o comerciales, contáctanos para obtener los permisos correspondientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactoPage; 