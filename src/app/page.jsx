import HeroSection from "@/components/ui/HeroSection"
import Novedades from "@/components/ui/Novedades"
import TopDestinos from "@/components/ui/TopDestinos.js"
import Eventos from "@/components/ui/Eventos"
import PueblosMagicos from "@/components/ui/PueblosMagicos"
import NoticiasRecientes from "@/components/ui/NoticiasRecientes"
import Galeria from "@/components/ui/Galeria"
import SesionPreFooter from "@/components/ui/SesionPreFooter"

export default function Home() {
  return (
    <>
      <HeroSection />
      <PueblosMagicos />
      <NoticiasRecientes />
      <Eventos />
      <Novedades />
      <TopDestinos />
      <Galeria />
      <SesionPreFooter />
    </>
  )
}
