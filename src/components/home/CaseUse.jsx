export default function CaseUse() {
  return (
    <section id="case-use" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Case Use
          </h2>
          <p className="text-gray-300">
            See how healthcare providers across specialties are transforming
            their practice with Clin Technologies:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Primary Care */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              Primary Care
            </h3>
            <p className="text-gray-300 mb-4">
              Dr SJ M.D reduced her documentation time by 52%, allowing her to
              see 3 more patients daily while finishing her charts before
              leaving the office.
            </p>
            <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-400">
              "This AI tool streamlines a tedious process, reduces 'click
              fatigue,' and helps me reclaim some sanity."
            </blockquote>
            <p className="text-right text-sm text-gray-500 mt-2">— Dr SJ, MD</p>
          </div>

          {/* Emergency Medicine */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              Emergency Medicine
            </h3>
            <p className="text-gray-300 mb-4">
              Our ED department implemented Clin Tech, resulting in more
              thorough documentation and a 70% decrease in chart completion time
              during high-volume periods.
            </p>
            <p className="text-right text-sm text-gray-500">
              — Emergency Department (ED) Nurse Manager
            </p>
          </div>

          {/* Behavioral Health */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              Behavioral Health
            </h3>
            <p className="text-gray-300 mb-4">
              "Chartwright has been transformative for our clinic. Our
              therapists were drowning in documentation; we've slashed average
              charting time to under 3 minutes per patient, freeing up hours for
              direct care. More importantly, we've seen a significant reduction
              in documentation errors and compliance flags. It's not just
              faster, it's smarter documentation."
            </p>
            <p className="text-right text-sm text-gray-500">
              — Clinical Director, Behavioral Health Practice
            </p>
          </div>

          {/* Case Management */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              Case Management
            </h3>
            <p className="text-gray-300 mb-4">
              "Honestly, with the number of patients I manage, documentation
              felt like a constant, losing battle. But this AI feels like
              getting an assistant. It takes my detailed notes and instantly
              creates the clear, customized charts I need. I'm getting hours
              back each week – hours I can now spend with my patients, tackling
              barriers, not just typing."
            </p>
            <p className="text-right text-sm text-gray-500">
              — Social Worker/Case Manager
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
