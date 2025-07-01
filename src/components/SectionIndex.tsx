import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'process', label: 'Process' },
  { id: 'positioning', label: 'Positioning' },
  { id: 'finalcta', label: 'Final' },
];

const SectionIndex: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let found = 0;
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.3) {
            found = i;
          }
        }
      }
      setActiveIndex(found);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
      {sections.map((section, idx) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`transition-all duration-300 w-5 h-5 rounded-full border-2 border-blue-400/40 bg-black/60 shadow-lg flex items-center justify-center focus:outline-none ${
            activeIndex === idx ? 'scale-125 border-blue-400 bg-blue-400/80 shadow-blue-400/40' : 'hover:scale-110 hover:border-blue-400/70'
          }`}
          aria-label={section.label}
        >
          <span className={`block w-2.5 h-2.5 rounded-full ${activeIndex === idx ? 'bg-white' : 'bg-blue-400/40'}`}></span>
        </button>
      ))}
    </div>
  );
};

export default SectionIndex; 