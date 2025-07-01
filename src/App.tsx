import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ProcessSection from './components/ProcessSection';
import PositioningSection from './components/PositioningSection';
import FinalCTASection from './components/FinalCTASection';
import CustomCursor from './components/CustomCursor';
import WireframeBackground from './components/WireframeBackground';
import ScrollProgress from './components/ScrollProgress';
import SectionIndex from './components/SectionIndex';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Advanced scroll animations
    const setupScrollAnimations = () => {
      // Staggered fade-in animations
      gsap.utils.toArray('.fade-in-stagger').forEach((element: any, index) => {
        gsap.fromTo(element, 
          { 
            opacity: 0, 
            y: 80,
            scale: 0.96,
            rotationX: 30
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
              scrub: false
            },
            delay: index * 0.18
          }
        );
      });

      // Text reveal animations
      gsap.utils.toArray('.text-reveal').forEach((element: any) => {
        const chars = element.textContent.split('');
        element.innerHTML = chars.map((char: string) => 
          `<span class=\"char\" style=\"display: inline-block; opacity: 0; transform: translateY(40px);\">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');

        gsap.to(element.querySelectorAll('.char'), {
          opacity: 1,
          y: 0,
          duration: 0.08,
          stagger: 0.025,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            scrub: false
          }
        });
      });

      // Parallax elements with different speeds
      gsap.utils.toArray('.parallax-slow').forEach((element: any) => {
        gsap.fromTo(element, 
          { y: 0 },
          {
            y: -120,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 2.2
            }
          }
        );
      });

      gsap.utils.toArray('.parallax-fast').forEach((element: any) => {
        gsap.fromTo(element, 
          { y: 0 },
          {
            y: -260,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.1
            }
          }
        );
      });

      // Scale on scroll animations
      gsap.utils.toArray('.scale-in').forEach((element: any) => {
        gsap.fromTo(element,
          { 
            scale: 0.85,
            opacity: 0,
            rotation: -6
          },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1.7,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              scrub: false
            }
          }
        );
      });

      // Slide in from sides
      gsap.utils.toArray('.slide-left').forEach((element: any) => {
        gsap.fromTo(element,
          { x: -160, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
              scrub: false
            }
          }
        );
      });

      gsap.utils.toArray('.slide-right').forEach((element: any) => {
        gsap.fromTo(element,
          { x: 160, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
              scrub: false
            }
          }
        );
      });

      // Morphing background elements
      gsap.utils.toArray('.morph-bg').forEach((element: any) => {
        gsap.to(element, {
          rotation: 360,
          scale: 1.18,
          duration: 24,
          repeat: -1,
          ease: "none"
        });
      });
    };

    setupScrollAnimations();

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black text-white overflow-hidden">
      <CustomCursor />
      <WireframeBackground />
      <ScrollProgress />
      <SectionIndex />
      <div className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <PositioningSection />
        <FinalCTASection />
      </div>
    </div>
  );
}

export default App;