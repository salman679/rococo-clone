import { useState } from "react";
import Header from "../components/Shared/Header";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import OurSolutions from "../components/home/OurSolutions";
import Action from "../components/home/Action";
import Technology from "../components/home/Technology";
import CaseUse from "../components/home/CaseUse";
import Started from "../components/home/Started";
import Footer from "../components/Shared/Footer";
import Benefits from "../components/home/Benefits";

export default function Home({ onGetStarted, onSignIn }) {
  const [activeTab, setActiveTab] = useState("transcriptx");

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero onGetStarted={onGetStarted} onSignIn={onSignIn} />

      {/* About Section */}
      <About />

      {/* Our Solutions Section */}
      <OurSolutions />

      {/* Solutions in Action Section */}
      <Action activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Our Technology Section */}
      <Technology />

      {/* Benefits Section */}
      <Benefits onGetStarted={onGetStarted} onSignIn={onSignIn} />

      {/* Case Use Section */}
      <CaseUse />

      {/* Get Started Section */}
      <Started onGetStarted={onGetStarted} onSignIn={onSignIn} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
