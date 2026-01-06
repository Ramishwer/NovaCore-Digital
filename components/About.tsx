
import React from 'react';

interface AboutProps {
  showFull?: boolean;
}

const About: React.FC<AboutProps> = ({ showFull }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`flex flex-col lg:flex-row items-center gap-16 ${showFull ? 'mb-24' : ''}`}>
        <div className="lg:w-1/2">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
              alt="NovaCore Collaboration" 
              className="rounded-3xl shadow-2xl relative z-10 object-cover aspect-video lg:aspect-square"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-3xl -z-10 hidden md:block opacity-20 animate-pulse"></div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Built on a Foundation of <span className="text-blue-600">Innovation</span></h2>
          <p className="text-slate-600 mb-6 leading-relaxed text-lg">
            Founded in 2018, NovaCore Digital emerged from a collective of software engineers and business strategists dedicated to closing the gap between cutting-edge technology and real-world business outcomes.
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed text-lg">
            We don't just build software; we build the future of your company. Our approach is deeply collaborative, technical, and relentlessly focused on scalability.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-1">150+</div>
              <div className="text-slate-500 font-medium">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-1">12</div>
              <div className="text-slate-500 font-medium">Global Markets</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-1">98%</div>
              <div className="text-slate-500 font-medium">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-slate-500 font-medium">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {showFull && (
        <div className="space-y-32">
          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Integrity", desc: "We operate with absolute transparency in our technical audits and project estimates." },
              { title: "Scalability", desc: "Every line of code is written with tomorrow's growth in mind." },
              { title: "Excellence", desc: "We don't settle for 'working'; we strive for 'optimal'." }
            ].map((value, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="bg-blue-600 p-12 md:p-20 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h3>
              <p className="text-2xl md:text-3xl font-light italic leading-relaxed">
                "To democratize enterprise-grade technology for forward-thinking organizations, enabling them to navigate the digital frontier with confidence and clarity."
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h3>
              <p className="text-slate-600">The visionary minds driving NovaCore forward.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { name: "Julian Vance", role: "CEO & Strategic Lead", img: "https://i.pravatar.cc/300?u=julian" },
                { name: "Dr. Elena Muro", role: "Chief Technology Officer", img: "https://i.pravatar.cc/300?u=elena" },
                { name: "Kevin Zhang", role: "Head of AI Research", img: "https://i.pravatar.cc/300?u=kevin" }
              ].map((member, i) => (
                <div key={i} className="text-center group">
                  <div className="relative mb-6 inline-block">
                    <img src={member.img} alt={member.name} className="w-48 h-48 rounded-full shadow-xl grayscale group-hover:grayscale-0 transition-all duration-500 object-cover" />
                    <div className="absolute inset-0 rounded-full border-4 border-blue-600/0 group-hover:border-blue-600/100 transition-all duration-500 scale-110"></div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
