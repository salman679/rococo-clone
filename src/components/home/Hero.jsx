export default function Hero({ onGetStarted, onSignIn }) {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background particles/stars effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-32 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-60 right-1/4 w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-900"></div>
      </div>

      <div className="container mx-auto text-center max-w-4xl relative z-10">
        {/* AI Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center">
            <img src="./logo-1.png" alt="" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-blue-400">Clin Technologies</span>
        </h1>

        <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          Revolutionizing clinical documentation through{" "}
          <span className="text-orange-400 font-semibold">HIPAA COMPLIANT</span>{" "}
          advanced artificial intelligence, giving healthcare providers more
          time for what truly matters — patient care. try it for{" "}
          <span className="text-orange-400 font-semibold">FREE</span> today.
        </p>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Our sophisticated AI platform intelligently processes clinical
          conversations, creating accurate documentation that integrates with
          your existing EMR system.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onSignIn}
            className="text-lg px-8 py-3 border-2 border-blue-400 text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white transition-colors rounded-full font-medium"
          >
            Login
          </button>
          <button
            onClick={onGetStarted}
            className="text-lg px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer transition-colors rounded-full font-medium"
          >
            Signup
          </button>
        </div>
      </div>
    </section>
  );
}
