'use client'

import Container from '@/components/ui/Container'
import MunicipioCard from '@/components/ui/MunicipioCard'
import municipios from '@/data/municipios'

const Municipios = () => {
  return (
    <>
      <section className="py-8">
        <div className="relative w-full h-[220px] md:h-[260px] lg:h-[380px] overflow-hidden">
          <img
            src="/img/imagesGoMich/Fondo.jpg"
            srcSet="/img/imagesGoMich/Fondo.jpg 640w, /img/imagesGoMich/Fondo.jpg 1024w, /img/imagesGoMich/Fondo.jpg 1600w"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Municipios de Michoacán"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 z-20 text-white w-full flex flex-col justify-end">
            <div className="max-w-[1200px] 2xl:max-w-[1440px] mx-auto w-full h-full px-6 md:px-11">
              <div className="hidden lg:flex flex-col justify-end h-full pb-14">
                <h1 className="text-6xl font-bold drop-shadow-md mb-10 text-left">Municipios</h1>
                <div className="grid grid-cols-4 gap-x-8 text-left text-base font-onest">
                  <div><p className="text-2xl">12</p><p className="opacity-80">municipios destacados</p></div>
                  <div><p className="text-2xl">1,210,523</p><p className="opacity-80">visitantes registrados</p></div>
                  <div><p className="text-2xl">78,945</p><p className="opacity-80">opiniones comunitarias</p></div>
                  <div><p className="text-2xl">9.1 / 10</p><p className="opacity-80">nivel de recomendación</p></div>
                </div>
              </div>

              <div className="py-10 lg:hidden flex-col justify-end h-full pb-20 sm:pb-16">
                <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-md mb-6 sm:mb-8 text-center sm:text-left">Municipios</h1>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 text-xs sm:text-sm font-onest text-center sm:text-left">
                  <div><p className="text-lg sm:text-xl">12</p><p className="opacity-80">municipios destacados</p></div>
                  <div><p className="text-lg sm:text-xl">1,210,523</p><p className="opacity-80">visitantes registrados</p></div>
                  <div><p className="text-lg sm:text-xl">78,945</p><p className="opacity-80">opiniones comunitarias</p></div>
                  <div><p className="text-lg sm:text-xl">9.1 / 10</p><p className="opacity-80">nivel de recomendación</p></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {municipios.map((municipio, index) => (
              <MunicipioCard key={index} municipio={municipio} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Municipios
