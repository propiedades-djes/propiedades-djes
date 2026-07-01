import Beneficios from "./components/(Beneficios)/Beneficios";
import BeneficiosStats from "./components/(Beneficios)/BeneficiosStats";
import Footer from "./components/(Footer)/Footer";
import Hero from "./components/(Hero)/Hero";
import PruebaSocial from "./components/(PruebaSocial)/PruebaSocial";
import Servicios from "./components/(Servicios)/Servicios";
import Testimonios from "./components/(testimonios)/Testimonios";

export default function Home() {
  return (
    <div className="bg-beige">
      <Hero />
      <PruebaSocial />
      <Servicios/>
      <Beneficios />
      <BeneficiosStats />
      <Testimonios />
      <Footer />
    </div>
  );
}
