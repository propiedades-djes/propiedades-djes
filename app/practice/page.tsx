/* "use client"

import { useRef } from "react"


export default function PracticePage() {   

    const ref = useRef(null)

    const HandleClick =()=>{

        ref.current.focus()
    }

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <input ref={ref} type="text" className="border"/>
            <button onClick={HandleClick}>Hacer Focus</button>
        </div>
    )
} */