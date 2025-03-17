'use client'

import Container from '@/components/UI/Container'

const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      
      <div className="absolute top-0 left-0 w-full h-full">
        <img 
          src="/img/imagesGoMich/Fondo.jpg" 
          alt="Fondo Michoacán"
          className="w-full h-full object-cover cursor-pointer"
        />
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center">
        <div className="bg-white/60 rounded-xl shadow-lg p-6 md:p-8 w-full flex flex-col">
          
          <div className="flex flex-wrap justify-between items-center w-full gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-primary">
                Descubre Michoacán
              </h2>
              <p className="text-gray-600">El Alma de México</p>
            </div>

            <div className="bg-white/60 rounded-full shadow-md px-4 py-2 flex items-center border border-gray-300 text-sm font-medium whitespace-nowrap">
              <p className="text-gray-700">En Maravatío | 10:30 h</p>
            </div>
          </div>

          <div className="flex w-full mt-4 items-center border border-gray-300 rounded-full overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="¿A qué municipio deseas viajar?"
              className="w-full px-4 py-2 focus:outline-none border-none text-gray-700"
            />
            <button className="bg-accent text-white px-6 py-2 rounded-full hover:opacity-80 cursor-pointer">
              Buscar
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroSection
