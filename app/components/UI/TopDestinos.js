'use client'

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
    <section className="py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 md:mb-4">Top Destinos</h2>
        <div className="w-60 h-[5px] mb-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinos.map((item, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl group border"
            >
              <img 
                src={item.src} 
                alt={item.titulo} 
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-end pb-6">
                <h3 className="text-lg md:text-xl font-bold text-center px-6">
                  {item.titulo}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopDestinos
