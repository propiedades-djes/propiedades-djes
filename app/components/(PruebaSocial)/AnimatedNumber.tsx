"use client"

import { useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

type Props = {
    value: number
    suffix: string
    className?: string
}


export default function AnimatedNumber({value, suffix, className}: Props){

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const [count, setCount] = useState(0)

    useEffect(() => {
    if (!isInView) return  // 1. Si no es visible, no hacer nada

    const interval = setInterval(() => {  // 2. Cada 20ms ejecuta esto:
        setCount(c => {                     // 3. Toma el count actual (c)
        if (c >= value) {                 // 4. ¿Ya llegamos al final?
            clearInterval(interval)         // 5. Sí → para el interval
            return value                    // 6. Y deja el valor final
        }
        const incremento = value / 75       // 7. Calcula cuánto incrementar (75 pasos)
        return c + incremento              // 8. Devuelve el nuevo count, que se renderiza          
        })
    }, 30)

    }, [isInView, value])

    return (
        <div ref={ref} className={`${className}`}>
            {Math.round(count)}{suffix}
        </div>
    )
}