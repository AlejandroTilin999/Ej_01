'use client'

import { useEffect, useState } from "react"
import Container from "@/components/ui/Container"
import "@/styles/hovered-card.css"
import { eventos } from "@/data/landingpage/eventos"


const Eventos = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(true), 200)
  }, [])

  return (
    <section className="py-12 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-onest text-gray-800 mb-2 md:mb-4">Eventos</h2>
        <div className="w-50 h-[5px] bg-primary mb-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {eventos.map((evento, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-sm overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md group"
              onPointerDown={(e) => {
                const target = e.currentTarget
                target.classList.add('hovered-card')
                setTimeout(() => {
                  target.classList.remove('hovered-card')
                }, 400)
              }}              
            >
              <img
                src={evento.src}
                alt={evento.titulo}
                className="w-full h-56 object-cover"
              />

              <div className="p-4 text-center md:text-left">
                <div className="flex justify-center md:justify-start text-gray-700 font-onest text-lg">
                  <span className="text-2xl font-onest">{evento.fecha}</span>
                  <span className="ml-2 text-lg uppercase">{evento.mes}</span>
                </div>
                <h3 className="text-lg font-onest mt-2">{evento.titulo}</h3>
                <p className="text-gray-600 text-sm">{evento.lugar}</p>

                <button className="mt-4 px-6 py-2 bg-accent text-white rounded-lg text-sm font-onest hover:opacity-85 transition-all w-auto mx-auto md:w-full md:mx-0 cursor-pointer">
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Eventos
