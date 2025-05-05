'use client'

import Container from '@/components/ui/Container'
import TiktokIcon from '@/assets/icons/TiktokIcon'
import FacebookIcon from '@/assets/icons/FacebookIcon'
import InstagramIcon from '@/assets/icons/InstagramIcon'
import MailIcon from '@/assets/icons/MailIcon'
import PhoneIcon from '@/assets/icons/PhoneIcon'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 w-full">
      <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left font-onest">

        <div className="flex flex-col items-center md:items-start">
          <a href="/" className="flex items-center cursor-pointer">
            <img
              src="/img/imagesGoMich/GoMichoacan.png"
              alt="Go Michoacán"
              className="w-[150px] md:w-[200px] cursor-pointer"
            />
          </a>
          <p className="mt-2 text-sm">
            "Conoce, vive y siente la esencia de Michoacán."
          </p>
          <p className="font-onest mt-4">Síguenos</p>
          <div className="flex justify-center md:justify-start gap-4 text-lg mt-2">
            <a href="https://www.facebook.com/gomichoacan" className="hover:text-gray-300 cursor-pointer">
              <FacebookIcon stroke="#fff" />
            </a>
            <a href="https://www.instagram.com/gomichoacan/?fbclid=IwY2xjawKFCDJleHRuA2FlbQIxMABicmlkETBYNkNIbklRR0FZUkdEQ2pLAR7avc720oukrJcUSnjPvun7ZYwv5a1ZjSw4u-QxmN36X-HGVLYU3B2DU_-eFg_aem_0aoN7jhdHUaVzoEcNqCfbw#" className="hover:text-gray-300 cursor-pointer">
              <InstagramIcon stroke="#fff" />
            </a>
            <a href="https://www.tiktok.com/@gomichoacan" className="hover:text-gray-300 cursor-pointer">
              <TiktokIcon stroke="#fff" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-onest mb-2">Enlaces</p>
          <ul className="space-y-1 text-sm">
            <li><a href="/restaurantes" className="hover:text-gray-300 cursor-pointer">Restaurantes</a></li>
            <li><a href="/alojamientos" className="hover:text-gray-300 cursor-pointer">Alojamientos</a></li>
            <li><a href="/eventos" className="hover:text-gray-300 cursor-pointer">Eventos</a></li>
            <li><a href="/municipios" className="hover:text-gray-300 cursor-pointer">Municipios</a></li>
            <li><a href="/noticias" className="hover:text-gray-300 cursor-pointer">Noticias</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">Enlaces</p>
          <ul className="space-y-1 text-sm">
            <li><a href="/restaurantes" className="hover:text-gray-300 cursor-pointer">Restaurantes</a></li>
            <li><a href="/alojamientos" className="hover:text-gray-300 cursor-pointer">Alojamientos</a></li>
            <li><a href="/eventos" className="hover:text-gray-300 cursor-pointer">Eventos</a></li>
            <li><a href="/municipios" className="hover:text-gray-300 cursor-pointer">Municipios</a></li>
            <li><a href="/noticias" className="hover:text-gray-300 cursor-pointer">Noticias</a></li>
          </ul>
        </div>

        <div>
          <p className="font-onest mb-2">Contacto</p>
          <div className="text-sm flex flex-col items-center md:items-start gap-2">
            <a href="tel:+52786 105 4198" className="flex items-center gap-2 hover:text-gray-300 transition">
              <PhoneIcon stroke="#fff" />
              +52 786 105 4198
            </a>
            <a href="mailto:hola@eurekabrain.com.mx" className="flex items-center gap-2 hover:text-gray-300 transition">
              <MailIcon stroke="#fff" />
              hola@eurekabrain.com.mx
            </a>
          </div>
        </div>

      </Container>
    </footer>
  )
}

export default Footer
