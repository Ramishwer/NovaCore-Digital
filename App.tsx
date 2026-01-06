
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import GeminiAdvisor from './components/GeminiAdvisor';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export type View = 'home' | 'services' | 'advisor' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  // Handle back/forward buttons and initial load
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
    handleHashChange(); // Run on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (view: View) => {
    window.location.hash = view;
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero onNavigate={navigate} />
            <section className="py-20 bg-white">
              <Services limit={3} onNavigate={() => navigate('services')} />
            </section>
            <section className="py-20 bg-slate-50">
              <GeminiAdvisor />
            </section>
            <section className="py-20 bg-slate-900 text-white">
              <Testimonials />
            </section>
          </>
        );
      case 'services':
        return (
          <div className="pt-32 pb-20">
            <Services showFull />
          </div>
        );
      case 'advisor':
        return (
          <div className="pt-32 pb-20 bg-slate-50 min-h-[80vh] flex items-center">
            <GeminiAdvisor />
          </div>
        );
      case 'about':
        return (
          <div className="pt-32 pb-20">
            <About showFull />
          </div>
        );
      case 'contact':
        return (
          <div className="pt-32 pb-20">
            <Contact />
          </div>
        );
      default:
        return <Hero onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500">
      <Header currentView={currentView} onNavigate={navigate} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;
