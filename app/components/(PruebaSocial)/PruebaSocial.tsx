import Image from "next/image";
import FadeUpOnScroll from "../animation/FadeUpOnScroll";
import AnimatedNumber from "./AnimatedNumber";

const stats = [
  {
    value: 200,
    suffix: "+",
    label: "Clientes Satisfechos",
    bg: "bg-azul-claro",
    valueColor: "text-white-pure",
    labelColor: "text-white-pure",
  },
  {
    value: 95,
    suffix: "%",
    label: "de tasa de éxito en cierres",
    bg: "bg-azul-marino",
    valueColor: "text-dorado",
    labelColor: "text-white-pure",
  },
  {
    value: 10,
    suffix: "+",
    label: "Años de experiencia",
    bg: "bg-dorado",
    valueColor: "text-white-pure",
    labelColor: "text-white-pure",
  },
  {
    value: 80,
    suffix: "%",
    label: "en zonas de alta valorización",
    bg: "bg-beige border border-crema",
    valueColor: "text-dorado",
    labelColor: "text-black-soft",
  },
];

export default function PruebaSocial() {
  return (
    <section className="relative bg-beige py-12 px-6">
      <Image
        src="/resources/nube.svg"
        alt=""
        width={230}
        height={163}
        className="absolute top-20 right-10 opacity-60 pointer-events-none select-none w-32 md:w-40 lg:w-56"
        aria-hidden
      />
      <Image
        src="/resources/nube.svg"
        alt=""
        width={230}
        height={163}
        className="hidden lg:block absolute bottom-5 left-16 opacity-60 pointer-events-none select-none w-32 md:w-40 lg:w-56"
        aria-hidden
      />
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-12">
          <div className="text-center mb-8 flex flex-col items-center justify-center gap-4">
            <FadeUpOnScroll>
              <h2 className="text-azul-marino font-bold text-2xl md:text-4xl lg:text-6xl italic">
                Tu casa en las mejores manos
              </h2>
            </FadeUpOnScroll>

            <FadeUpOnScroll>
              <p className="text-azul-marino text-base md:text-lg font-semibold mt-2">
                Nuestros resultados hablan por nosotros
              </p>
            </FadeUpOnScroll>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map(({ value, suffix, label, bg, valueColor, labelColor }) => (
              <div
                key={value}
                className={`${bg} rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-44`}
              >
                <AnimatedNumber 
                  value={value}
                  suffix={suffix} 
                  className={`${valueColor} font-bold text-4xl leading-tight`}
                />
                  
                <span className={`${labelColor} text-base mt-2`}>{label}</span>
              </div>
            ))}
          </div>
        </div>

    </section>
  );
}
