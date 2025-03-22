'use client'

const SesionPreFooter = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] bg-primary overflow-hidden mb-12 flex items-center">
      <img
        src="/img/imagesGoMich/viejitos.jpg"
        alt="Fondo Catedral Michoacán"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-12 flex flex-col md:flex-row items-center md:items-start justify-between w-full text-center md:text-left">
        <p className="text-white text-lg sm:text-2xl md:text-3xl font-semibold leading-relaxed max-w-xl">
          Michoacán: un paraíso de tradiciones, paisajes únicos y sabores inolvidables. 
          Ven y vive la magia que hace latir el corazón de México.
        </p>
        <img
          src="/img/imagesGoMich/GoMichoacan.png"
          alt="Logo Go Michoacán"
          className="w-[200px] md:w-[250px] mt-6 md:mt-0"
        />
      </div>
    </section>
  )
}

export default SesionPreFooter
