import Beneficios from "./components/(Beneficios)/Beneficios";
import BeneficiosStats from "./components/(Beneficios)/BeneficiosStats";
import Hero from "./components/(Hero)/Hero";
import PruebaSocial from "./components/(PruebaSocial)/PruebaSocial";
import Servicios from "./components/(Servicios)/Servicios";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <PruebaSocial />
      <Servicios/>
      <Beneficios />
      <BeneficiosStats />
    </div>
  );
}
