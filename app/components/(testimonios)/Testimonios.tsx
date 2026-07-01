import Image from "next/image"
import FadeUpOnScroll from "../animation/FadeUpOnScroll"
import TestimoniosCarousel from "./TestimoniosCarousel"

export default function Testimonios() {
  return (
    <section className="relative bg-beige py-12 md:py-20 lg:py-32 px-6 overflow-hidden">
      <Image
        src="/resources/nube.svg"
        alt=""
        width={230}
        height={163}
        className="absolute top-10 right-6 opacity-60 pointer-events-none select-none w-32 md:w-40 lg:w-56"
        aria-hidden
      />
      <Image
        src="/resources/nube.svg"
        alt=""
        width={230}
        height={163}
        className="absolute bottom-5 left-10 opacity-60 pointer-events-none select-none w-32 md:w-40 lg:w-56"
        aria-hidden
      />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-8">
        <FadeUpOnScroll>
          <h2 className="text-azul-marino font-bold text-3xl md:text-4xl lg:text-6xl italic text-center">
            Testimonios
          </h2>
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <TestimoniosCarousel />
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm gap-2 bg-white-pure rounded-full px-6 py-3 shadow-sm font-semibold text-black-soft hover:bg-crema/40 transition-colors"
          >
            Mira las reseñas en Google
            <Image
              src="/icons/google.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden
            />
          </a>
        </FadeUpOnScroll>
      </div>
    </section>
  )
}
