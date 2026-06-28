"use client"

type Props = {
  onVideoEnd: () => void
}

export default function HeroVideo({onVideoEnd}: Props){

  return (
    <div>
    {/* Desktop video — visible desde md en adelante */}
      <video
        onEnded={onVideoEnd}
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src="/hero/hero-desktop.mp4"
        poster="/hero/hero_img_desktop.svg"
        autoPlay
        muted
        playsInline
      />

      {/* Mobile video — visible solo en pantallas pequeñas */}
      <video
        onEnded={onVideoEnd}
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
        src="/hero/hero-mobile.mp4"
        poster="/hero/hero_img_mobile.svg"
        autoPlay
        muted
        playsInline
      />
    </div>
  )
}

