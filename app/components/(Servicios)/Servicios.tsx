import Image from "next/image"
import FadeUpOnScroll from "../animation/FadeUpOnScroll"

export default function Servicios() {
  return (
    <section className="bg-beige py-10 px-8 md:py-32">
      <div className="max-w-6xl mx-auto flex flex-col gap-20 xl:gap-32">

        {/* Oportunidades de inversión */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16">

          <FadeUpOnScroll>
            <div className="relative shrink-0 w-72 h-80 lg:w-100 flex items-center justify-center">
              <Image
                src="/resources/mano-casa.svg"
                alt="Mano sosteniendo una casa"
                width={270}
                height={270}
                className="relative z-10 w-[270px] h-[270px] lg:w-[570px] lg:h-[470px]"
              />
              <Image
                src="/resources/nube-casa.svg"
                alt=""
                width={270}
                height={95}
                className="absolute bottom-10 left-0 z-0 w-[270px] h-[95px] lg:w-[470px] lg:h-[305px]"
                aria-hidden
              />
            </div>
          </FadeUpOnScroll>

          <div className="flex flex-col  gap-4 flex-1 max-w-xl">
            <FadeUpOnScroll>
              <h2 className="text-azul-marino font-bold text-3xl md:text-4xl lg:text-6xl italic text-start">
                Oportunidades de inversión
              </h2>
            </FadeUpOnScroll>
            <FadeUpOnScroll>
              <p className="text-black-soft text-sm leading-relaxed">
                Accede a un inventario curado de propiedades verificadas, ubicadas en las zonas de mayor crecimiento de Medellín.
              </p>
              <p className="text-black-soft text-sm leading-relaxed mt-3">
                Te acompañamos con análisis de rentabilidad, videos profesionales y asesoría legal completa.
              </p>
            </FadeUpOnScroll>
            <FadeUpOnScroll>
              <ul className="flex flex-col gap-2 mt-1 text-black-soft text-base">
                <li className="font-bold">• Tiempo promedio de venta: 70-90 días.</li>
                <li className="font-bold">• Revisión legal anticipada (cero sorpresas).</li>
                <li className="font-bold">• Análisis de valorización y ROI.</li>
                <li className="font-bold">• Acompañamiento premium 1 a 1.</li>
              </ul>
            </FadeUpOnScroll>
            <FadeUpOnScroll>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-azul-marino text-white-pure px-5 py-3.5 rounded-full text-sm font-semibold mt-2 hover:bg-azul-marino/85 transition-colors w-fit"
              >
                Encuentra tu Inversión Segura →
              </a>
            </FadeUpOnScroll>
          </div>
        </div>

        <hr className="border-azul-marino" />

        {/* ¿Quieres Vender tu Propiedad? */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16 ">

          <FadeUpOnScroll>
            <div className="">
              <Image
                src="/resources/paloma-imagen.svg"
                alt="Paloma sosteniendo llaves de una propiedad"
                width={502}
                height={338}
                className="shrink-0 w-72.5 h-auto lg:w-92.5 xl:w-100"
              />
            </div>
          </FadeUpOnScroll>

          <div className="flex flex-col gap-4 flex-1 max-w-xl pb-20">
            <FadeUpOnScroll>
              <h2 className="text-azul-marino font-bold text-3xl md:text-4xl lg:text-6xl italic text-start">
                ¿Quieres Vender <br />
                <span className="text-dorado">Tu Propiedad?</span>
              </h2>
            </FadeUpOnScroll>
            <FadeUpOnScroll>
              <p className="text-black-soft text-base leading-relaxed">
                Evita meses de incertidumbre. Nosotros conectamos tu propiedad con compradores serios y calificados en Medellín.
              </p>
            </FadeUpOnScroll>
            <FadeUpOnScroll>
              <ul className="flex flex-col gap-2 mt-1 text-black-soft text-base">
                <li className="font-bold">• Venta rápida y rentable</li>
                <li className="font-bold">• Gestión completa 360°</li>
                <li className="font-bold">• Seguridad total</li>
              </ul>
            </FadeUpOnScroll>
            <FadeUpOnScroll>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-azul-marino text-white bg-azul-marino px-5 py-3.5 rounded-full font-semibold mt-2 hover:bg-azul-marino/10 transition-colors w-fit"
              >
                <Image
                  src="/icons/WhatsApp-Icon.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                  aria-hidden
                />
                Solicita tu Avalúo Gratis
              </a>
            </FadeUpOnScroll>
          </div>
        </div>

      </div>
    </section>
  )
}
