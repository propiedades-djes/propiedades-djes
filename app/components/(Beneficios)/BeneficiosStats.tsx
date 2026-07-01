import Image from "next/image"
import FadeUpOnScroll from "../animation/FadeUpOnScroll"

const stats = [
  {
    icon: "/icons/candado.svg",
    label: "Garantía de Cero\nVicios Legales",
    bg: "bg-azul-claro",
  },
  {
    icon: "/icons/calendario.svg",
    label: "+10 Años de\nExperiencia",
    bg: "bg-azul-marino",
  },
  {
    icon: "/icons/metricas.svg",
    label: "95% Éxito en\nCierres",
    bg: "bg-dorado",
  },
]

export default function BeneficiosStats() {
  return (
    <div className="bg-beige flex flex-col md:flex-row">
      {stats.map((s) => (
        <div key={s.label} className="md:flex-1">
            <div className={`${s.bg} md:rounded-b-3xl py-10 px-6 flex flex-col items-center justify-center gap-5 text-center`}>
                <FadeUpOnScroll>
                  <Image
                    src={s.icon}
                    alt=""
                    width={52}
                    height={52}
                    aria-hidden
                  />
                </FadeUpOnScroll>
                
                <FadeUpOnScroll>
                  <p className="text-white-pure font-semibold text-sm md:text-base leading-snug whitespace-pre-line">
                    {s.label}
                  </p>
                </FadeUpOnScroll>
            </div>
        </div>
      ))}
    </div>
  )
}
