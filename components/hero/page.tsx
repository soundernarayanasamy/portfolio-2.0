export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-black font-league flex items-center">
      <div
        className="
          max-w-7xl mx-auto w-full 
          px-6 
          pt-32 md:pt-40 
          pb-16 
          flex flex-col md:flex-row 
          items-start md:items-center     /* ← LEFT aligned on mobile */
          justify-center 
          gap-12
        "
      >
        {/* LEFT TEXT */}
        <div className="flex-1 text-left">   {/* ← ALWAYS LEFT ALIGNED */}
          <h1 className="text-gray-100 text-4xl md:text-6xl font-light leading-tight">
            Your Friendly Neighborhood <br />
            Front-End Dev.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mt-4">
            Let’s Start Something Great.
          </p>

          <button
            className="
              mt-8 px-8 py-4
              bg-white/10 text-gray-100
              rounded-xl border border-white/20
              backdrop-blur-xl
              hover:bg-white/20 transition-all
            "
          >
            Book a Meeting
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <img
            src="/snail.png"
            alt="Illustration"
            className="w-96 md:w-[420px] object-contain opacity-90"
          />
        </div>

      </div>
    </section>
  );
}
