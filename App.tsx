
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import GeminiAdvisor from './components/GeminiAdvisor';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageHeader from './components/PageHeader';

export type View = 'home' | 'services' | 'advisor' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as View;
      if (['home', 'services', 'advisor', 'about', 'contact'].includes(hash)) {
        setCurrentView(hash);
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (view: View) => {
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <div className="animate-fadeIn">
            <Hero onNavigate={navigate} />
            <section className="py-24 bg-white">
              <Services limit={3} onNavigate={() => navigate('services')} />
            </section>
            <section className="py-24 bg-slate-50 border-y border-slate-100">
              <GeminiAdvisor />
            </section>
            <section className="py-24 bg-slate-900 text-white">
              <Testimonials />
            </section>
          </div>
        );
      case 'services':
        return (
          <div className="animate-fadeIn">
            <PageHeader 
              title="Expert Services" 
              subtitle="Precision-engineered digital solutions for the modern enterprise, from cloud scaling to AI automation."
            />
            <div className="py-20 bg-white">
              <Services showFull />
            </div>
          </div>
        );
      case 'advisor':
        return (
          <div className="animate-fadeIn">
            <PageHeader 
              title="Strategic AI Advisor" 
              subtitle="Harness the power of Gemini 3.0 to solve your most complex business hurdles in seconds."
            />
            <div className="py-24 bg-slate-50 min-h-screen">
              <GeminiAdvisor />
              <div className="max-w-4xl mx-auto px-4 mt-12 text-slate-500 text-sm italic text-center">
                * Our AI engine utilizes real-time market data to provide context-aware recommendations.
              </div>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="animate-fadeIn">
            <PageHeader 
              title="The NovaCore Story" 
              subtitle="A mission-driven collective of engineers and strategists building the future of industry."
            />
            <div className="py-24 bg-white">
              <About showFull />
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="animate-fadeIn">
            <PageHeader 
              title="Connect With Us" 
              subtitle="Start your transformation journey today. Our consultants are ready to discuss your unique challenges."
            />
            <div className="py-24 bg-white">
              <Contact />
            </div>
          </div>
        );
      default:
        return <Hero onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Header currentView={currentView} onNavigate={navigate} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;
