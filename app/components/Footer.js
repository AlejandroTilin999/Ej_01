'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-10 px-6 md:px-20 w-full mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image src="/img/navbar/GoMichoacan.png" alt="Go Michoacán" width={200} height={80} />
          <p className="mt-2 text-sm">"Conoce, vive y siente la esencia de Michoacán."</p>
          <div className="mt-4">
            <p className="font-semibold">Síguenos</p>
            <div className="flex gap-4 mt-2">
              <FaFacebookF className="text-2xl cursor-pointer hover:text-gray-300" />
              <FaInstagram className="text-2xl cursor-pointer hover:text-gray-300" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-gray-300" />
            </div>
          </div>
        </div>
        
        <div className="text-center md:text-left">
          <p className="font-bold mb-2">Enlaces</p>
          <ul className="space-y-1 text-sm">
            <li><Link href="/#" className="hover:text-gray-300">Restaurantes</Link></li>
            <li><Link href="/#" className="hover:text-gray-300">Alojamientos</Link></li>
            <li><Link href="/#" className="hover:text-gray-300">Actividades</Link></li>
            <li><Link href="/#" className="hover:text-gray-300">Municipios</Link></li>
            <li><Link href="/#" className="hover:text-gray-300">Blog</Link></li>
          </ul>
        </div>
        
        <div className="text-center md:text-left">
          <p className="font-bold mb-2">Contacto</p>
          <p className="text-sm flex items-center justify-center md:justify-start gap-2"><span>📱</span> +52 000 0000</p>
          <p className="text-sm flex items-center justify-center md:justify-start gap-2 mt-2"><span>✉️</span> gomich@gmail.com</p>
        </div>
      </div>
      
      <div className="border-t border-gray-500 mt-8 pt-4 text-center text-sm flex flex-col sm:flex-row justify-center sm:justify-between max-w-7xl mx-auto">
        <p><Link href="/#" className="hover:text-gray-300">Términos y Condiciones</Link></p>
        <p><Link href="/#" className="hover:text-gray-300">Privacidad</Link></p>
        <p>© 2025 GoMichoacán</p>
      </div>
    </footer>
  )
}

export default Footer
