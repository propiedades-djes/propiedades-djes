"use client"

import { createContext, useContext, useState } from "react"

type IntroContextType = {
  videoTerminado: boolean
  setVideoTerminado: (v: boolean) => void
}

const IntroContext = createContext<IntroContextType>({
  videoTerminado: false,
  setVideoTerminado: () => {},
})

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [videoTerminado, setVideoTerminado] = useState(false)

  return (
    <IntroContext.Provider value={{ videoTerminado, setVideoTerminado }}>
      {children}
    </IntroContext.Provider>
  )
}

export function useIntro() {
  return useContext(IntroContext)
}
