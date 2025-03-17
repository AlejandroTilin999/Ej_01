'use client'

import Link from 'next/link'
import Container from '@/components/UI/Container'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 w-full">
      <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start">
          <img src="/img/imagesGoMich/GoMichoacan.png" alt="Go Michoacán" className="w-[150px] md:w-[200px] cursor-pointer" />
          <p className="mt-2 text-sm">"Conoce, vive y siente la esencia de Michoacán."</p>
        </div>

        <div>
          <p className="font-bold mb-2">Enlaces</p>
          <ul className="space-y-1 text-sm justify-center">
            <li><Link href="#" className="hover:text-gray-300 cursor-pointer ">Restaurantes</Link></li>
            <li><Link href="#" className="hover:text-gray-300 cursor-pointer">Alojamientos</Link></li>
            <li><Link href="#" className="hover:text-gray-300 cursor-pointer">Actividades</Link></li>
            <li><Link href="#" className="hover:text-gray-300 cursor-pointer">Municipios</Link></li>
            <li><Link href="#" className="hover:text-gray-300 cursor-pointer">Blog</Link></li>
          </ul>
        </div>
        
        <div>
          <p className="font-bold mb-2">Contacto</p>
          <p className="text-sm flex items-center justify-center md:justify-start gap-2 cursor-pointer"><span>✉️</span> gomich@gmail.com</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
