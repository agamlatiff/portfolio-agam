
import React from 'react';

const TechStack: React.FC = () => {
  // Double the items for seamless loop
  const loopItems = [...TECH_STACK_ICONS, ...TECH_STACK_ICONS];

  return (
    <section className="py-10 bg-white dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div 
         className="relative w-full group hover-pause"
      >
         {/* Adjusted gradients to match bg-white */}
         <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
         <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>

         <div className="flex animate-marquee w-max gap-12 items-center">
           {loopItems.map((tech, idx) => {
             const Icon = tech.icon;
             return (
               <div key={`${tech.name}-${idx}`} className="flex items-center gap-3 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 cursor-default">
                  <Icon size={28} className="text-slate-800 dark:text-slate-200" />
                  <span className="text-lg font-bold text-slate-700 dark:text-slate-300">{tech.name}</span>
               </div>
             );
           })}
         </div>
      </div>
    </section>
  );
};

export default TechStack;
