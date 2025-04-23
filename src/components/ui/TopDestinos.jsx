'use client'

import Container from '@/components/ui/Container'
import { useState } from "react"
import { destinos } from "@/data/landingpage/topDestinos"

const TopDestinos = () => {
  return (
    <section className="py-12 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-onest text-gray-800 mb-2 md:mb-4">Top Destinos</h2>
        <div className="w-50 h-[5px] bg-accent mb-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinos.map((item, index) => {
            const [hovered, setHovered] = useState(false)

            return (
              <a
                key={index}
                href={`/destinos/${item.titulo.toLowerCase().replaceAll(" ", "-")}`}
                onTouchStart={() => {
                  setHovered(true)
                  setTimeout(() => setHovered(false), 1000)
                }}
                className={`relative overflow-hidden rounded-xl transition-all duration-500 border border-gray-200 
                  shadow-xl ${hovered ? "shadow-2xl scale-[1.03]" : "group hover:shadow-2xl hover:scale-[1.03]"}`}
              >
                <img
                  src={item.src}
                  alt={item.titulo}
                  className={`w-full h-full object-cover transition-transform duration-500 
                    ${hovered ? "scale-110 blur-sm" : "group-hover:scale-110 group-hover:blur-sm"}`}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent transition-opacity duration-500 flex flex-col items-center justify-end pb-6 cursor-pointer 
                    ${hovered ? "opacity-100" : "group-hover:opacity-100 opacity-0"}`}
                >
                  <h3
                    className={`text-white text-lg md:text-xl font-onest text-center px-6 transition-all duration-500 
                      ${hovered ? "translate-y-0 scale-110" : "translate-y-10 group-hover:translate-y-0 group-hover:scale-110"}`}
                  >
                    {item.titulo}
                  </h3>
                </div>
              </a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default TopDestinos
