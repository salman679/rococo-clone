export default function Benefits({ onGetStarted, onSignIn }) {
  return (
    <section id="benefits" className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
          Benefits
        </h2>
        <p className="text-gray-300 mb-12">
          Healthcare providers using Clin Technologies solutions report:
        </p>

        <div className="space-y-4 text-left max-w-2xl mx-auto mb-12">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-300">
              Reduction in documentation time by 40-60%
            </span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-300">
              Improved work-life balance with less after-hours charting
            </span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-300">
              Enhanced patient interaction due to less focus on note-taking
            </span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-300">
              More comprehensive and consistent clinical documentation
            </span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-300">
              Reduced risk of documentation errors and omissions
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onSignIn}
            className="text-lg px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors rounded-full font-medium"
          >
            Login
          </button>
          <button
            onClick={onGetStarted}
            className="text-lg px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white transition-colors rounded-full font-medium"
          >
            Signup
          </button>
        </div>
      </div>
    </section>
  );
}
