'use client'

import Image from 'next/image'
import { FaMapMarkerAlt } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      
      {/* Imagen de fondo */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image 
          src="/img/imagenFondo/mich.webp" 
          alt="Fondo Michoacán"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 w-[90%] max-w-3xl flex flex-col">
          
          {/* Sección superior con título y ubicación */}
          <div className="flex flex-wrap justify-between items-center w-full gap-4">
            
            {/* Texto principal */}
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-[var(--color-primary)]">
                Descubre Michoacán
              </h2>
              <p className="text-gray-600">El Alma de México</p>
            </div>

            {/* Ubicación y hora */}
            <div className="bg-white rounded-full shadow-md px-4 py-2 flex items-center border border-gray-300 text-sm font-medium whitespace-nowrap">
              <FaMapMarkerAlt className="text-[#EA5261] text-lg mr-2" />
              <p className="text-gray-700">En Maravatío | 10:30 h</p>
            </div>
          </div>

          {/* Barra de búsqueda - Responsiva */}
          <div className="flex w-full mt-4 items-center border border-gray-300 rounded-full overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="¿A qué municipio deseas viajar?"
              className="w-full px-4 py-2 focus:outline-none border-none text-gray-700"
            />
            <button className="bg-[var(--color-accent)] text-white px-6 py-2 rounded-full hover:opacity-80">
              Buscar
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection
