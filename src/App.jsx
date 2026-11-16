import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sports from './components/Sports';
import Location from './components/Location';
import Gallery from './components/Gallery';
import RegistrationForm from './components/RegistrationForm';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFCFF] text-slate-800 flex flex-col selection:bg-[#16A34A] selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Welcome & Offer) */}
        <Hero />

        {/* 2. About the Club (من نحن) */}
        <About />

        {/* 3. Sports & Activities (ألعابنا الرياضية) */}
        <Sports />

        {/* 4. Location & Accessibility (موقعنا) */}
        <Location />

        {/* 6. Photo Gallery (معرض الصور) */}
        <Gallery />

        {/* 5. Registration Form (سجل بياناتك) */}
        <RegistrationForm />
      </main>

      {/* Floating WhatsApp & Mobile Sticky Bar */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
