
import React from 'react';

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group">
    <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

interface ServicesProps {
  limit?: number;
  showFull?: boolean;
  onNavigate?: () => void;
}

const Services: React.FC<ServicesProps> = ({ limit, showFull, onNavigate }) => {
  const allServices = [
    {
      title: "Digital Transformation",
      description: "We guide established enterprises through complex digital pivots, modernizing legacy systems and culture.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      title: "AI & Automation",
      description: "Integrating cutting-edge LLMs and custom automation pipelines to drastically reduce operational friction.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    },
    {
      title: "Cloud Architecture",
      description: "Scalable, secure, and cost-efficient multi-cloud strategies designed for maximum uptime and global reach.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive threat assessments and zero-trust security architecture implementation for modern organizations.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    },
    {
      title: "Data Analytics",
      description: "Transforming raw data into actionable business intelligence through advanced visualization and predictive modeling.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    },
    {
      title: "IoT Systems",
      description: "Connecting physical assets to digital ecosystems for real-time monitoring and industrial optimization.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    }
  ];

  const displayedServices = limit ? allServices.slice(0, limit) : allServices;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
          {showFull ? 'Our Comprehensive Solutions' : 'Core Competencies'}
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-6">
          Tailored technological mastery to drive your competitive advantage.
        </p>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {displayedServices.map((service, idx) => (
          <ServiceCard 
            key={idx}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>

      {!showFull && onNavigate && (
        <div className="text-center">
          <button 
            onClick={onNavigate}
            className="text-blue-600 font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      )}

      {showFull && (
        <div className="mt-24 p-12 bg-slate-900 rounded-3xl text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Methodology</h3>
              <ul className="space-y-4">
                {[
                  "Discovery & Audit: We deep dive into your current tech stack.",
                  "Strategic Blueprint: Mapping out the roadmap to success.",
                  "Agile Implementation: Rapid development with constant feedback.",
                  "Post-Launch Optimization: Ensuring long-term scalability and performance."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 font-bold">{i+1}</span>
                    <span className="text-slate-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
               <img src="https://picsum.photos/seed/methodology/600/400" alt="Work Process" className="rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
