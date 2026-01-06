
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, Global Logistics",
      content: "NovaCore transformed our entire supply chain logic in six months. Their AI integration saved us millions in overhead.",
      avatar: "https://picsum.photos/seed/person1/100/100"
    },
    {
      name: "Marcus Thorne",
      role: "Founder, Zenith FinTech",
      content: "The advisory tool they built isn't just a gimmick—it's become a core part of how our executive team brainstorms.",
      avatar: "https://picsum.photos/seed/person2/100/100"
    },
    {
      name: "Elena Rodriguez",
      role: "Operations VP, RetailNext",
      content: "Working with NovaCore was the best decision we made for our digital pivot. Professional, technical, and visionary.",
      avatar: "https://picsum.photos/seed/person3/100/100"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Leaders Say</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all group">
            <div className="flex items-center mb-6">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 border-2 border-slate-700 group-hover:border-blue-500 transition-all" />
              <div>
                <div className="font-bold">{t.name}</div>
                <div className="text-slate-400 text-sm">{t.role}</div>
              </div>
            </div>
            <p className="text-slate-300 italic">"{t.content}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
