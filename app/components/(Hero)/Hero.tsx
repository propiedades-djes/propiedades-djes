import HeroClientPage from "./HeroClient";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Contenido sobre el video */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white-pure">
        <HeroClientPage/>
      </div>

    </section>
  );
};

export default Hero;
