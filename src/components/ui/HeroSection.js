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

      <Container className="relative z-10 flex flex-col items-center justify-center">
        <div className="bg-white/90 rounded-xl shadow-lg px-10 md:px-20 py-10 md:py-14 w-full max-w-[85rem] h-auto flex flex-col justify-between mt-24 md:mt-24">
          
          
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-4 text-center md:text-left">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-primary">
                Descubre Michoacán
              </h2>
              <p className="text-gray-600">El Alma de México</p>
            </div>

            <div className="bg-white/90 rounded-full shadow-md px-6 py-3 flex items-center border border-gray-300 text-base font-medium">
              <p className="text-gray-700">En Maravatío | 10:30 h</p>
            </div>
          </div>

          
          <div className="flex flex-col md:flex-row w-full mt-6 items-center gap-3 text-center">
            <input
              type="text"
              placeholder="¿A qué municipio deseas viajar?"
              className="w-full px-4 py-3 focus:outline-none border border-gray-300 rounded-full shadow-sm text-gray-700 text-center md:text-left"
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
