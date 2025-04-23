'use client'

import Container from '@/components/ui/Container'

const HeroSection = () => {
  return (
    <div className="relative w-full h-[75vh] flex items-center justify-center bg-white/70">
      <div className="absolute top-0 left-0 w-full h-full">
        <img 
          src="/img/imagesGoMich/Fondo.jpg" 
          alt="Fondo Michoacán"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center w-full">
        <div className="bg-white/90 rounded-xl shadow-lg px-6 md:px-10 py-10 md:py-14 w-full h-auto flex flex-col justify-between mt-24 md:mt-24">
          
          <div className="flex flex-col md:flex-row justify-center items-center w-full gap-6 text-center md:text-left">
            <div className="flex items-center justify-center flex-wrap gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-onest text-primary">
                  Descubre Michoacán
                </h2>
                <p className="text-gray-600 mt-1">El Alma de México</p>
              </div>

              <div className="bg-white rounded-full shadow-md px-6 py-3 flex items-center border border-gray-300 text-base font-onest">
                <p className="text-gray-700">⛅ 18°C Soleado</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full mt-6 items-center gap-4">
            <input
              type="text"
              placeholder="¿A qué municipio deseas viajar?"
              className="w-full md:flex-1 px-4 py-3 focus:outline-none border border-gray-300 rounded-full shadow-sm text-gray-700 text-center md:text-left bg-white"
            />
            <button className="bg-accent text-white px-8 py-3 md:py-4 md:px-6 w-full md:w-auto rounded-full hover:opacity-80 transition-opacity duration-300 cursor-pointer">
              Buscar
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroSection
