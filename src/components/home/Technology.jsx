export default function Technology() {
  return (
    <section id="technology" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Our Technology
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto">
            At Clin Technologies, we've built our platform on groundbreaking AI
            technology specifically designed for healthcare. Our solutions use
            the latest advancements in natural language processing and machine
            learning to create a system that truly understands the complexities
            of medical documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Sophisticated Natural Language Processing */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              Sophisticated Natural Language Processing
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              At the core of our platform is an advanced foundation model. This
              enables our AI system to grasp the nuances of clinical
              conversations — understanding context, recognizing medical
              terminology. This deep comprehension allows our AI to generate
              clear, concise, and contextually relevant medical notes
              automatically.
            </p>
          </div>

          {/* Learning Mode & Personalization */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <div className="text-white font-bold text-lg">S</div>
            </div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              Learning Mode & Personalization
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our AI doesn't rely on generic templates. We initiate the process
              by learning directly from your specific cases and workflows. The
              system intelligently adapts to your style and output based on your
              ongoing feedback. With each processed case, your unique clinical
              documentation needs become increasingly precise, ensuring a truly
              personalized solution.
            </p>
          </div>

          {/* Robust Data Privacy & Security */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="space-y-2 mb-4">
              <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                HIPAA COMPLIANT
              </span>
              <br />
              <span className="inline-block bg-gray-600 text-white px-2 py-1 rounded text-xs font-medium">
                BUSINESS ASSOCIATE AGREEMENT
              </span>
            </div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              Robust Data Privacy & Security
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Protecting sensitive health information is paramount. Our AI
              solutions are designed with a privacy-first approach,
              incorporating principles like "zero trust." We utilize robust
              security measures, including comprehensive encryption, secure data
              rest and in transit, and strict, role-based access controls, to
              ensure data integrity and confidentiality. Access is restricted
              exclusively to authorized personnel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
