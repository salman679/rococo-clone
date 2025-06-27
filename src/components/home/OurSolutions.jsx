export default function OurSolutions() {
  return (
    <section id="solutions" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Our Solutions
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered solutions transforms every
            aspect of healthcare documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Validity */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 text-green-400 mr-3">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-400">Validity</h3>
            </div>
            <p className="text-gray-300">
              Mitigate compliance risk with powerful AI that optimizes chart
              reviews for accuracy, integrity, coding, and compliance. Validity
              ensures your documentation meets the highest standards for coding
              accuracy, and maintains regulatory compliance.
            </p>
          </div>

          {/* Redactify */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">R</span>
              </div>
              <h3 className="text-xl font-bold text-blue-400">Redactify</h3>
            </div>
            <p className="text-gray-300">
              Effortlessly redact HIPAA identifiers from text, documents, and
              unstructured data with Redactify – safeguarding your compliance
              while preserving the essential patient information vital to
              maintaining clinical context.
            </p>
          </div>

          {/* TranscriptX */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-400">TranscriptX</h3>
            </div>
            <p className="text-gray-300">
              Spend less time documenting. TranscriptX dictates highly accurate
              medical transcriptions of patient encounters and conversations,
              transforming complex medical terminology and clinical context for
              superior accuracy.
            </p>
          </div>

          {/* Chartwright */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-400">Chartwright</h3>
            </div>
            <p className="text-gray-300">
              Your best friend with charting – turn any normal text into a high-
              quality chart delivered exactly how healthcare professionals need
              it structured. Chartwright transforms options to clearly your
              workflow and documentation standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
