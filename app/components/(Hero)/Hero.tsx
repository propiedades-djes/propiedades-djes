import HeroClientPage from "./HeroClient";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh+80px)] md:min-h-screen overflow-hidden">

      {/* Contenido sobre el video */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white-pure">
        <HeroClientPage/>
      </div>

    </section>
  );
};

export default Hero;
