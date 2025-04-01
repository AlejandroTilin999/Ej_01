'use client'

const SesionPreFooter = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] bg-primary overflow-hidden flex items-center">
      <img
        src="/img/imagesGoMich/viejitos.jpg"
        alt="Fondo Catedral Michoacán"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-12 w-full flex flex-col items-center justify-center gap-6 md:gap-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-10 text-center md:text-left">
          <p className="text-white text-lg sm:text-2xl md:text-3xl font-onest leading-relaxed max-w-xl">
            Michoacán: un paraíso de tradiciones, paisajes únicos y sabores inolvidables. 
            Ven y vive la magia que hace latir el corazón de México.
          </p>

          <img
            src="/img/imagesGoMich/GoMichoacan.png"
            alt="Logo Go Michoacán"
            className="w-[200px] md:w-[250px]"
          />
        </div>

        <div className="mt-2 md:mt-0">
          <button className="bg-accent text-white px-6 py-3 rounded-full shadow-md hover:opacity-98 transition-all duration-300 text-sm sm:text-base font-onest cursor-pointer">
            Únete con nosotros
          </button>
        </div>

      </div>
    </section>
  )
}

export default SesionPreFooter
