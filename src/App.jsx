import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import Process from './components/sections/Process';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/ui/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main id="main-content">
          <Hero />
          <Features />
          <Services />
          <Testimonials />
          <Pricing />
          <Process />
          <CTA />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
