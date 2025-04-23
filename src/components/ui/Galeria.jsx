'use client'

import { useState } from "react"
import Container from "@/components/ui/Container"
import { galeria } from "@/data/landingpage/galeria"

const Galeria = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleTouch = (index) => {
    setHoveredIndex(index)
    setTimeout(() => setHoveredIndex(null), 1000)
  }

  return (
    <section className="py-12 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-onest text-gray-800 mb-2 md:mb-4">
          Rostros y Paisajes de Michoacán
        </h2>
        <div className="w-50 h-[5px] bg-accent mb-6"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {galeria.map((item, index) => {
            const isTouched = hoveredIndex === index
            return (
              <a
                key={index}
                href={`/destinos/${item.titulo.toLowerCase().replaceAll(" ", "-")}`}
                onTouchStart={() => handleTouch(index)}
                className={`relative overflow-hidden rounded-lg transition-all duration-500 shadow-sm cursor-pointer 
                  ${isTouched ? "scale-105" : "group hover:scale-105"}`}
              >
                <img
                  src={item.src}
                  alt={item.titulo}
                  className={`w-full h-[140px] sm:h-[180px] lg:h-[200px] object-cover transition-transform duration-500 
                    ${isTouched ? "scale-110" : "group-hover:scale-110"}`}
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center text-white text-lg font-onest bg-accent transition-all duration-500 
                    ${isTouched ? "opacity-80" : "opacity-0 group-hover:opacity-80"}`}
                >
                  {item.titulo}
                </div>
              </a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Galeria
