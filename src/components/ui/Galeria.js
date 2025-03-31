'use client'

import Container from "@/components/ui/Container"

const galeria = [
  { src: "/img/imagesGoMich/Fondo.jpg", titulo: "Uruapan" },
  { src: "/img/imagesGoMich/Fondo.webp", titulo: "Pátzcuaro" },
  { src: "/img/imagesGoMich/mich.webp", titulo: "Morelia" },
  { src: "/img/imagesGoMich/Fondo.jpg", titulo: "Zirahuén" },
  { src: "/img/imagesGoMich/Fondo.webp", titulo: "Paracho" },
  { src: "/img/imagesGoMich/mich.webp", titulo: "Tzintzuntzan" },
  { src: "/img/imagesGoMich/Fondo.jpg", titulo: "Tacámbaro" },
  { src: "/img/imagesGoMich/Fondo.webp", titulo: "Santa Clara del Cobre" },
  { src: "/img/imagesGoMich/mich.webp", titulo: "Angangueo" },
  { src: "/img/imagesGoMich/Fondo.jpg", titulo: "Tlalpujahua" }
]

const Galeria = () => {
  return (
    <section className="py-12 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-bold text-gray-800 mb-2 md:mb-4">
          Rostros y Paisajes de Michoacán
        </h2>
        <div className="w-50 h-[5px] bg-accent mb-6"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {galeria.map((item, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg group transition-all duration-500 shadow-sm hover:scale-105 cursor-pointer"
            >
              <img 
                src={item.src} 
                alt={item.titulo} 
                className="w-full h-[140px] sm:h-[180px] lg:h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-accent opacity-0 group-hover:opacity-80 transition-all duration-500">
                {item.titulo}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Galeria
