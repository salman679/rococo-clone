export default function Action({ activeTab, setActiveTab }) {
  return (
    <section id="action" className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12">
          See Our Solutions in Action
        </h2>

        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="grid grid-cols-4 bg-slate-700 rounded-t-lg">
            <button
              onClick={() => setActiveTab("transcriptx")}
              className={`py-3 px-4 text-center font-medium transition-colors ${
                activeTab === "transcriptx"
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              TranscriptX
            </button>
            <button
              onClick={() => setActiveTab("chartwright")}
              className={`py-3 px-4 text-center font-medium transition-colors ${
                activeTab === "chartwright"
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Chartwright
            </button>
            <button
              onClick={() => setActiveTab("redactify")}
              className={`py-3 px-4 text-center font-medium transition-colors ${
                activeTab === "redactify"
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Redactify
            </button>
            <button
              onClick={() => setActiveTab("validity")}
              className={`py-3 px-4 text-center font-medium transition-colors ${
                activeTab === "validity"
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Validity
            </button>
          </div>

          {/* Tab Header */}
          <div className="bg-blue-500 p-4">
            <div className="text-center text-white font-medium">
              Click to collapse comparison
            </div>
            <div className="grid grid-cols-4 gap-4 mt-2">
              <div className="bg-blue-600 p-2 rounded text-center text-sm">
                Example 1
              </div>
              <div className="bg-blue-600 p-2 rounded text-center text-sm">
                Example 2
              </div>
              <div className="bg-blue-600 p-2 rounded text-center text-sm">
                Example 3
              </div>
              <div className="bg-blue-600 p-2 rounded text-center text-sm">
                Example 4
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-slate-800 rounded-b-lg p-6">
            {activeTab === "transcriptx" && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  Experience TranscriptX - Accurate Nursing Notes
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Original Note */}
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-blue-400 font-semibold">
                        Nurse's Quick Report
                      </h4>
                      <span className="text-gray-400 text-sm">
                        Simulated Unstructured
                      </span>
                    </div>
                    <div className="bg-slate-700 rounded p-4 h-96 overflow-y-auto">
                      <h5 className="text-white font-semibold mb-2">
                        Nurse's Quick Report (Simulated Verbal Input/Jotted
                        Notes)
                      </h5>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        "Alright, handover for room 72F, brought in by EMS,
                        syncopal episode at home. Witnessed by daughter, slumped
                        in chair while watching TV. LOC: GCS 15 on arrival. Hx
                        of HTN, AFib on Eliquis. Vitals: BP 92/60, HR 110, Temp
                        37.1, Pul ox 96% on RA. She's in AFib RVR. Got an 18g IV
                        L AC, labs drawn - CBC, BMP, Trop. Then Cardio consult.
                        EKG done, showed AFib RVR, no acute ST changes noted.
                        Portable CXR done. Trop negative. Bolus, BP now 115/65.
                        HR down to 92. Still awake, alert, denies CP, SOB.
                        Daughter checks on her pressure and rhythm." Keep a
                        close eye on her pressure and rhythm."
                      </p>
                    </div>
                  </div>

                  {/* TranscriptX Enhanced */}
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-orange-400 font-semibold">
                        TranscriptX Note
                      </h4>
                      <span className="text-gray-400 text-sm">
                        AI-Structured Nursing Notes/Handover
                      </span>
                    </div>
                    <div className="bg-slate-700 rounded p-4 h-96 overflow-y-auto">
                      <h5 className="text-white font-semibold mb-2">
                        TranscriptX - AI-Structured Nursing Notes/Handover
                      </h5>
                      <div className="text-gray-300 text-sm space-y-3">
                        <div>
                          <strong className="text-orange-400">Patient:</strong>{" "}
                          Gable, J. (First Name Redacted)
                          <br />
                          <strong className="text-orange-400">
                            Age/Sex:
                          </strong>{" "}
                          72-year-old Female (72F)
                          <br />
                          <strong className="text-orange-400">
                            Location:
                          </strong>{" "}
                          ED Bed 7<br />
                          <strong className="text-orange-400">
                            Arrival:
                          </strong>{" "}
                          Via EMS
                        </div>

                        <div>
                          <strong className="text-orange-400">
                            Presenting Complaint:
                          </strong>
                          <br />
                          Syncopal episode at home.
                        </div>

                        <div>
                          <strong className="text-orange-400">History:</strong>
                          <br />
                          Witnessed syncopal episode (approx. 30 seconds, loss
                          of consciousness) reported by husband. Past Medical
                          History (PMH): significant for Hypertension (HTN) and
                          Atrial Fibrillation (AFib), prescribed Eliquis.
                        </div>

                        <div>
                          <strong className="text-orange-400">
                            Initial Assessment (On Arrival):
                          </strong>
                          <br />
                          Neurological: Glasgow Coma Scale (GCS) 15. Awake,
                          alert, oriented. Denies chest pain (CP) or shortness
                          of breath (SOB). Gross neurological
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <button className="flex items-center text-blue-400 border border-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition-colors">
                    <svg
                      className="h-4 w-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Previous Example
                  </button>
                  <button className="flex items-center text-blue-400 border border-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition-colors">
                    Next Example
                    <svg
                      className="h-4 w-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {activeTab === "chartwright" && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  Experience Chartwright - Clean and Structure Messy Clinical
                  Notes
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Messy Original */}
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-blue-400 font-semibold">
                        Doctor Note
                      </h4>
                      <span className="text-gray-400 text-sm">
                        Messy Original
                      </span>
                    </div>
                    <div className="bg-slate-700 rounded p-4 h-96 overflow-y-auto">
                      <h5 className="text-white font-semibold mb-2">
                        Messy Original Doctor Note
                      </h5>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Patient Name: Sarah Jones DOB: 03/10/1985 Date:
                        11/03/2023
                        <br />
                        <br />
                        Reason 4 Visit: Follow up for hypertension and recent
                        URI.
                        <br />
                        <br />
                        <strong>Subjective:</strong>
                        <br />
                        Pt states blood pressure readings at home have been
                        better since adjusting medication, mostly around 130s
                        over 80s but she had a lingering cough, non-productive.
                        Denies any chest pain, shortness of breath. Symptoms
                        started about 10 days ago. Used OTC cough drops. No new
                        c/o regarding BP. No new symptoms. Appetite good.
                        Exercising 3x per week. Wt stable. Sleep ok when not
                        coughing. Non-smoker, social etoh.
                        <br />
                        <br />
                        <strong>Objective:</strong>
                        <br />
                        BP: 128/82 seated R arm. Pulse 72, RR 16, Temp 36.8C.
                        General appearance: Appears well, mild cough noted
                        during exam. HEENT: Mucous membranes moist, no
                        congestion. Lungs: Clear to auscultation bilaterally, no
                        wheezes or crackles heard. Heart: RRR, no murmurs.
                        Abdomen: soft, non-tender. Skin: warm and dry. Exam w/in
                        normal limits
                      </p>
                    </div>
                  </div>

                  {/* Chartwright Enhanced */}
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-orange-400 font-semibold">
                        Chartwright Chart
                      </h4>
                      <span className="text-gray-400 text-sm">AI-Enhanced</span>
                    </div>
                    <div className="bg-slate-700 rounded p-4 h-96 overflow-y-auto">
                      <h5 className="text-white font-semibold mb-2">
                        Chartwright-Enhanced Chart
                      </h5>
                      <div className="text-gray-300 text-sm space-y-3">
                        <div>
                          <strong className="text-orange-400">Patient:</strong>{" "}
                          Sarah Jones (DOB: 03/10/1985)
                          <br />
                          <strong className="text-orange-400">
                            Visit Date:
                          </strong>{" "}
                          2023-11-03
                          <br />
                          <strong className="text-orange-400">
                            Reason:
                          </strong>{" "}
                          Follow-up (Hypertension, Resolving URI)
                        </div>

                        <div>
                          <strong className="text-orange-400">
                            Subjective Report:
                          </strong>
                          <br />
                          <strong>Hypertension:</strong> Improved home BP
                          readings since lisinopril adjustment.
                          <br />
                          <strong>URI Symptoms:</strong> resolving (started ~10
                          days ago), persistent non-productive cough. Denies
                          fever, chest pain, SOB. Used OTC cough drops.
                          <br />
                          <strong>Lifestyle:</strong> Alternating better diet
                          (more vegetables). Exercise inconsistent due to cold.
                          Sleep okay except for cough. Non-smoker, social
                          alcohol.
                        </div>

                        <div>
                          <strong className="text-orange-400">
                            Objective:
                          </strong>
                          <br />
                          <strong>Vitals (11/03/2023):</strong> BP 135/84 P 72,
                          RR 16, T 36.8C
                          <br />
                          <strong>General:</strong> Appears well, mild cough
                          noted.
                          <br />
                          <strong>Exam:</strong> HEENT clear, Lungs clear to
                          auscultation,
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <button className="flex items-center text-blue-400 border border-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition-colors">
                    <svg
                      className="h-4 w-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Previous Example
                  </button>
                  <button className="flex items-center text-blue-400 border border-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition-colors">
                    Next Example
                    <svg
                      className="h-4 w-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {activeTab === "redactify" && (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold text-white mb-4">
                  Redactify Demo
                </h3>
                <p className="text-gray-300">Interactive demo coming soon...</p>
              </div>
            )}

            {activeTab === "validity" && (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold text-white mb-4">
                  Validity Demo
                </h3>
                <p className="text-gray-300">Interactive demo coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
