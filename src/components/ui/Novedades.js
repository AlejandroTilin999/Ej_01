'use client'

import Container from "@/components/ui/Container"

const Novedades = () => {
  const novedades = [
    { src: "/img/imagesGoMich/Fondo.jpg", titulo: "Morelia", descripcion: "La capital de Michoacán" },
    { src: "/img/imagesGoMich/Fondo.webp", titulo: "Pátzcuaro", descripcion: "Un pueblo mágico lleno de historia" },
    { src: "/img/imagesGoMich/mich.webp", titulo: "Uruapan", descripcion: "Cuna del aguacate y la naturaleza" },
    { src: "/img/imagesGoMich/Fondo.jpg", titulo: "Janitzio", descripcion: "La isla del Día de Muertos" },
    { src: "/img/imagesGoMich/Fondo.webp", titulo: "Zirahuén", descripcion: "El lago de aguas cristalinas" },
    { src: "/img/imagesGoMich/mich.webp", titulo: "Tzintzuntzan", descripcion: "Ruinas purépechas y cultura" }
  ]

  return (
    <section className="py-12 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-onest text-gray-800 mb-2 md:mb-4">Hospédate, Degusta y Descubre</h2>
        <div className="w-50 h-[5px] bg-secondary mb-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {novedades.map((item, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg group transition-all duration-500 shadow-sm hover:shadow-[0px_4px_10px_rgba(28,52,88,0.15)] ${
                index === 0 || index === 5 ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <img 
                src={item.src} 
                alt={item.titulo} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"></div>

              <div className="absolute bottom-0 left-0 w-full p-4 bg-primary/70 text-white text-center opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-lg font-onest">{item.titulo}</h3>
                <p className="text-sm opacity-80">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Novedades
