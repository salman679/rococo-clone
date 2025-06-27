export default function Started({ onGetStarted, onSignIn }) {
  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
          Get Started
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Ready to transform your clinical documentation process? Contact our
          team to learn how Clin Technologies can be tailored to your specific
          healthcare setting.
        </p>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-12">
          <p className="text-gray-300 mb-2">
            Or reach us directly via email at
          </p>
          <a
            href="mailto:support@clintechso.com"
            className="text-blue-400 hover:text-blue-300 text-lg"
          >
            support@clintechso.com
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
