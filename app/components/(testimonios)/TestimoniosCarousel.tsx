"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

type Testimonio = {
  quote: string
  name: string
  role: string
  rating: number
}

const testimonios: Testimonio[] = [
  {
    quote:
      "Vendí mi apartamento en menos de dos meses. El equipo se encargó de todo: fotos, visitas y trámites. Fue un proceso transparente y sin estrés.",
    name: "Maria Gutierrez",
    role: "Propietaria en Envigado",
    rating: 5,
  },
  {
    quote:
      "La asesoría fue impecable de principio a fin. Nos explicaron cada paso legal y siempre estuvieron disponibles para resolver dudas.",
    name: "Carlos Restrepo",
    role: "Comprador en El Poblado",
    rating: 5,
  },
  {
    quote:
      "Encontré el apartamento ideal en Laureles en solo dos semanas. El acompañamiento personalizado marcó la diferencia.",
    name: "Laura Zapata",
    role: "Compradora en Laureles",
    rating: 5,
  },
  {
    quote:
      "Profesionalismo total. El avalúo fue muy acertado y logramos cerrar la venta al precio que esperábamos.",
    name: "Andrés Ochoa",
    role: "Propietario en Sabaneta",
    rating: 5,
  },
  {
    quote:
      "Desde la primera visita hasta la firma final sentí total confianza y seguridad jurídica en cada trámite.",
    name: "Paola Vélez",
    role: "Compradora en Envigado",
    rating: 5,
  },
]

export default function TestimoniosCarousel() {
  const [index, setIndex] = useState(0)
  const total = testimonios.length
  const actual = testimonios[index]

  const anterior = () => setIndex((i) => (i - 1 + total) % total)
  const siguiente = () => setIndex((i) => (i + 1) % total)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <span className="font-bold text-black-soft">
        {index + 1}/ {total}
      </span>

      <div className="flex items-center gap-4 w-full max-w-xl">
        <button
          type="button"
          onClick={anterior}
          aria-label="Testimonio anterior"
          className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-azul-marino text-white-pure hover:bg-azul-marino/90 transition-colors cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="relative flex-1 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white-pure rounded-2xl shadow-sm border border-crema px-6 py-8 flex flex-col items-center text-center gap-4"
            >
              <p className="italic text-black-soft/80 text-sm md:text-base leading-relaxed">
                “{actual.quote}”
              </p>
              <div className="text-dorado text-lg tracking-widest" aria-hidden>
                {"★".repeat(actual.rating)}
              </div>
              <div>
                <p className="font-bold text-black-soft">{actual.name}</p>
                <p className="text-sm italic text-black-soft/70">{actual.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={siguiente}
          aria-label="Testimonio siguiente"
          className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-azul-marino text-white-pure hover:bg-azul-marino/90 transition-colors cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
