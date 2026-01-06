
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fadeIn">
          {title}
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
