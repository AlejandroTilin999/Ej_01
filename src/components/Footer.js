'use client'

import TiktokIcon from '@/assets/icons/TiktokIcon'

import Link from 'next/link'
import Container from '@/components/ui/Container'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 w-full">
      <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left font-semibold">
        
        <div className="flex flex-col items-center md:items-start">
          <img src="/img/imagesGoMich/GoMichoacan.png" alt="Go Michoacán" className="w-[150px] md:w-[200px] cursor-pointer" />
          <p className="mt-2 text-sm">"Conoce, vive y siente la esencia de Michoacán."</p>

          <p className="font-bold mt-4">Síguenos</p>
          <div className="flex justify-center md:justify-start gap-4 text-lg mt-2">
            <Link href="#" className="hover:text-gray-300 cursor-pointer">
              <img src="/img/svg/facebook-svgrepo-comB.svg" alt="Facebook" className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-gray-300 cursor-pointer">
              <img src="/img/svg/instagram-svgrepo-comB.svg" alt="Instagram" className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-gray-300 cursor-pointer">
              <TiktokIcon stroke="#fff" />
            </Link>
          </div>
        </div>

        <div>
          <p className="font-semibold mb-2">Enlaces</p>
          <ul className="space-y-1 text-sm">
            <li><Link href="#" className="hover:text-gray-300 cursor-pointer">Restaurantes</Link></li>
            <li><Link href="#" className="hover:text-gray-300 cursor-pointer">Alojamientos</Link></li>
            <li><Link href="#" className="hover:text-gray-300 cursor-pointer">Actividades</Link></li>
            <li><Link href="#" className="hover:text-gray-300 cursor-pointer">Municipios</Link></li>
            <li><Link href="#" className="hover:text-gray-300 cursor-pointer">Blog</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">Enlaces</p>
          <ul className="space-y-1 text-sm">
            <li><Link href="#" className="hover:text-gray-300 cursor-pointer">Restaurantes</Link></li>
            <li><Link href="#" className="hover:text-gray-300 cursor-pointer">Alojamientos</Link></li>
            <li><Link href="#" className="hover:text-gray-300 cursor-pointer">Actividades</Link></li>
            <li><Link href="#" className="hover:text-gray-300 cursor-pointer">Municipios</Link></li>
            <li><Link href="#" className="hover:text-gray-300 cursor-pointer">Blog</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-bold mb-2">Contacto</p>
          <div className="text-sm flex flex-col items-center md:items-start gap-2">
            <p className="flex items-center gap-2 cursor-pointer">
              <img src="/img/svg/phone-flip-svgrepo-com.svg" alt="Phone" className="w-5 h-5" />
              +52 000 0000
            </p>
            <p className="flex items-center gap-2 cursor-pointer">
              <img src="/img/svg/gmail-svgrepo-com.svg" alt="Email" className="w-5 h-5" />
              gomich@gmail.com
            </p>
          </div>
        </div>

      </Container>
    </footer>
  )
}

export default Footer
