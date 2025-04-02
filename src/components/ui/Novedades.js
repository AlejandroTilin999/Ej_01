'use client'

import Container from "@/components/ui/Container"
import { useState } from "react"

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
          {novedades.map((item, index) => {
            const [hovered, setHovered] = useState(false)

            return (
              <div
                key={index}
                onTouchStart={() => {
                  setHovered(true)
                  setTimeout(() => setHovered(false), 1000)
                }}
                className={`relative overflow-hidden rounded-lg transition-all duration-500 shadow-sm ${hovered ? "shadow-[0px_4px_10px_rgba(28,52,88,0.15)]" : ""
                  } ${index === 0 || index === 5 ? "md:col-span-2" : "md:col-span-1"} group`}
              >
                <img
                  src={item.src}
                  alt={item.titulo}
                  className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? "scale-105" : "group-hover:scale-105"
                    }`}
                />

                <div
                  className={`absolute inset-0 bg-primary/50 transition-opacity duration-500 cursor-pointer ${hovered ? "opacity-100" : "group-hover:opacity-100 opacity-0"
                    }`}
                />

                <div
                  className={`absolute bottom-0 left-0 w-full p-4 bg-primary/70 text-white text-center transition-all duration-500 ${hovered ? "translate-y-0 opacity-100" : "translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 opacity-0"
                    }`}
                >
                  <h3 className="text-lg font-onest">{item.titulo}</h3>
                  <p className="text-sm opacity-80">{item.descripcion}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Novedades
