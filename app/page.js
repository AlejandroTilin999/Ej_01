import HeroSection from "@/components/UI/HeroSection"
import Novedades from "./components/UI/Novedades"
import TopDestinos from "./components/UI/TopDestinos.js"
import Eventos from "./components/UI/Eventos"
import PueblosMagicos from "./components/UI/PueblosMagicos"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Novedades />
      <TopDestinos />
      <Eventos />
      <PueblosMagicos />
    </>
  )
}
