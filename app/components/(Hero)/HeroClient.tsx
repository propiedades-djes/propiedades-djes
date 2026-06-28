"use client"

import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import HeroVideo from "./hero-video"
import { useIntro } from "@/app/context/IntroContext"

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

export default function HeroClientPage() {
  const { videoTerminado, setVideoTerminado } = useIntro()

  return (
    <div className="relative w-full h-screen">

      {/* Video de fondo */}
      <HeroVideo onVideoEnd={() => setVideoTerminado(true)} />

      {/* Overlay para contraste de texto */}
      <div className="absolute inset-0 bg-black/0" />

      <motion.div
            animate={videoTerminado ? "show" : "hidden"}
            variants={container}
            initial="hidden"
            className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6"
          >
            {/* Textos agrupados */}
            <div className="flex flex-col items-center gap-4 max-w-3xl">
              <motion.h1
                variants={fadeUp}
                className="text-2xl font-bold md:text-4xl lg:text-6xl text-azul-marino leading-tight"
              >
                Tu inversión inmobiliaria más segura y rentable en Medellín
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg font-semibold text-azul-marino/90 max-w-2xl"
              >
                Encuentra propiedades verificadas, con garantía legal y asesoría experta 1 a 1.
                Seguridad, valorización y transparencia en cada paso
              </motion.p>
            </div>

            {/* Botones CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-4 items-center"
            >
              <a
                href="https://wa.me/573001234567"
                className="flex items-center justify-center gap-2 bg-azul-marino text-white px-6 py-3 rounded-full hover:bg-azul-marino/90 transition-colors font-semibold w-full sm:w-64"
              >
                <Image
                  src="/icons/WhatsApp-Icon.svg"
                  alt=""
                  width={25}
                  height={26}
                  className="w-6 h-6 shrink-0"
                  aria-hidden="true"
                />
                Agenda tu Consulta
              </a>

              <a
                href="#propiedades"
                className="flex items-center justify-center gap-2 border border-azul-marino text-azul-marino px-6 py-3 rounded-full font-semibold hover:bg-azul-marino/10 transition-colors w-full sm:w-64"
              >
                <Image
                  src="/icons/Propiedades-Icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                />
                Ver Propiedades
              </a>
            </motion.div>

            {/* Flecha scroll — el ícono se agregará después */}
            <motion.div
              variants={fadeUp}
              className="absolute bottom-8 flex flex-col items-center"
            >
              {/* scroll-arrow placeholder */}
            </motion.div>
      </motion.div>

    </div>
  )
}
