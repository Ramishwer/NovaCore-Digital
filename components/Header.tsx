
import React, { useState, useEffect } from 'react';
import { View } from '../App';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; view: View }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Services', view: 'services' },
    { label: 'AI Advisor', view: 'advisor' },
    { label: 'About', view: 'about' },
    { label: 'Contact', view: 'contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || currentView !== 'home' ? 'glass py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <span className={`text-2xl font-bold tracking-tighter ${isScrolled || currentView !== 'home' ? 'text-blue-600' : 'text-slate-900'}`}>
              NOVA<span className="text-slate-400">CORE</span>
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.view}
                onClick={() => onNavigate(link.view)}
                className={`font-medium transition-all relative py-1 ${
                  currentView === link.view 
                    ? 'text-blue-600' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.label}
                {currentView === link.view && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full animate-fadeIn"></span>
                )}
              </button>
            ))}
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-slate-100 animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => {
                  onNavigate(link.view);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 font-medium rounded-lg ${
                  currentView === link.view ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
