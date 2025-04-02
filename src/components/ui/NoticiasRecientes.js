'use client'

import Container from "@/components/ui/Container"

const noticias = [
  { src: "/img/imagesGoMich/Fondo.jpg", titulo: "Inauguran lujoso hotel boutique en el centro de Morelia", descripcion: "Un nuevo espacio de hospedaje con vistas a la Catedral y servicios exclusivos.", categoria: "TURISMO", fecha: "22 Marzo 2025, 09:30", ubicacion: "Morelia" },
  { src: "/img/imagesGoMich/Fondo.webp", titulo: "Pátzcuaro celebrará el Festival de la Cultura Purépecha", descripcion: "Un evento con danzas tradicionales, gastronomía y exposiciones artesanales.", categoria: "CULTURA", fecha: "20 Marzo 2025, 15:00", ubicacion: "Pátzcuaro" },
  { src: "/img/imagesGoMich/mich.webp", titulo: "Janitzio se prepara para la celebración de Día de Muertos", descripcion: "Se esperan miles de visitantes para una de las celebraciones más emblemáticas de México.", categoria: "TRADICIONES", fecha: "18 Marzo 2025, 18:45", ubicacion: "Janitzio" },
  { src: "/img/imagesGoMich/Fondo.jpg", titulo: "Nuevo recorrido turístico en Morelia", descripcion: "Explora los rincones más emblemáticos con guías certificados.", categoria: "TURISMO", fecha: "25 Marzo 2025, 10:00", ubicacion: "Morelia" },
  { src: "/img/imagesGoMich/Fondo.webp", titulo: "Pátzcuaro lanza festival gastronómico", descripcion: "Disfruta de los mejores platillos de la cocina purépecha.", categoria: "CULTURA", fecha: "23 Marzo 2025, 12:00", ubicacion: "Pátzcuaro" }
]

const getCategoryColor = (category) => {
  switch (category) {
    case "TURISMO":
      return "bg-accent"
    case "CULTURA":
      return "bg-secondary"
    case "TRADICIONES":
      return "bg-primary"
    default:
      return "bg-secondary-accent"
  }
}

const NoticiasRecientes = () => {
  return (
    <section className="py-12 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-onest text-gray-800 mb-4">Noticias más recientes</h2>
        <div className="w-50 h-[5px] bg-accent mb-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticias.map((noticia, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 
                ${index === 2 ? "lg:col-span-2 h-[250px] lg:order-last" : "h-[250px]"}`}
              onTouchStart={(e) => {
                const target = e.currentTarget
                if (target && target.classList) {
                  target.classList.add('hovered')
                  setTimeout(() => {
                    target.classList.remove('hovered')
                  }, 500)
                }
              }}
            >
              <img
                src={noticia.src}
                alt={noticia.titulo}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 text-xs font-onest text-white rounded-full ${getCategoryColor(noticia.categoria)}`}>
                    {noticia.categoria}
                  </span>
                  <span className="text-white text-xs opacity-80"> {noticia.ubicacion}</span>
                </div>

                <h3 className="text-white font-onest text-lg sm:text-xl mt-2 leading-tight">
                  {noticia.titulo}
                </h3>

                <p className="text-sm text-gray-300 mt-1">
                  {noticia.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default NoticiasRecientes