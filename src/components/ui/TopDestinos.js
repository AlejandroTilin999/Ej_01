'use client'

import Container from '@/components/ui/Container'

const TopDestinos = () => {
  const destinos = [
    { src: "/img/imagesGoMich/Fondo.jpg", titulo: "Morelia - La Ciudad de la Cantera Rosa" },
    { src: "/img/imagesGoMich/Fondo.webp", titulo: "Pátzcuaro - Cultura y Tradición" },
    { src: "/img/imagesGoMich/mich.webp", titulo: "Uruapan - Capital Mundial del Aguacate" },
    { src: "/img/imagesGoMich/Fondo.jpg", titulo: "Janitzio - La Isla del Día de Muertos" },
    { src: "/img/imagesGoMich/Fondo.webp", titulo: "Zirahuén - El Lago Esmeralda" },
    { src: "/img/imagesGoMich/mich.webp", titulo: "Tzintzuntzan - Historia y Arqueología" }
  ]

  return (
    <section className="py-12 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-onest text-gray-800 mb-2 md:mb-4">Top Destinos</h2>
        <div className="w-50 h-[5px] bg-accent mb-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinos.map((item, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl group transition-all duration-500 shadow-xl border border-gray-200 hover:shadow-2xl hover:scale-[1.03]"
            >
              <img 
                src={item.src} 
                alt={item.titulo} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end pb-6 cursor-pointer">
                <h3 className="text-white text-lg md:text-xl font-onest text-center px-6 transition-all duration-500 transform translate-y-10 group-hover:translate-y-0 group-hover:scale-110">
                  {item.titulo}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TopDestinos
