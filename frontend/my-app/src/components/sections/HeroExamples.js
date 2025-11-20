// Example: Alternative Hero Section Layouts using the modular components

'use client';

import React from 'react';
import {
  WindowContainer,
  WindowHeaderBar,
  HeroImage,
  HeroText,
  HeroButtons,
  HeroLayout,
  BackgroundParticles
} from '../ui';

// ===== EXAMPLE 1: Simple Hero (No Image) =====
export function SimpleHero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-8">
      <BackgroundParticles />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <WindowContainer>
          <WindowHeaderBar title="Welcome" />
          
          <div className="p-12 text-center">
            <HeroText
              badge="Full Stack Developer"
              name="Dinithi Dewmini"
              subtitle="beautiful web applications"
              description="with modern technologies."
            />
            <div className="mt-8 flex justify-center">
              <HeroButtons
                primaryText="View Work"
                secondaryText="Contact Me"
              />
            </div>
          </div>
        </WindowContainer>
      </div>
    </section>
  );
}

// ===== EXAMPLE 2: Reversed Layout (Image on Right) =====
export function ReversedHero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-8">
      <BackgroundParticles />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <WindowContainer>
          <WindowHeaderBar title="Designer Portfolio" />
          
          <HeroLayout
            leftContent={
              <>
                <HeroText
                  badge="UI/UX Designer"
                  name="Sarah"
                  subtitle="stunning user interfaces"
                  description="that users love."
                />
                <HeroButtons
                  primaryText="See Projects"
                  secondaryText="Download Resume"
                />
              </>
            }
            rightContent={
              <HeroImage 
                src="/designer-photo.jpg"
                alt="Designer Profile"
              />
            }
          />
        </WindowContainer>
      </div>
    </section>
  );
}

// ===== EXAMPLE 3: Compact Hero =====
export function CompactHero() {
  return (
    <section className="min-h-[70vh] relative overflow-hidden flex items-center justify-center px-4 py-8">
      <BackgroundParticles />
      
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <WindowContainer className="transform hover:scale-[1.02]">
          <WindowHeaderBar title="Quick Portfolio" />
          
          <div className="p-8 space-y-6">
            <HeroText
              badge="Software Engineer"
              name="Alex"
              subtitle="efficient solutions"
              description="to complex problems."
              className="space-y-3"
            />
            <HeroButtons
              primaryText="Get Started"
              secondaryText="Learn More"
              className="justify-start"
            />
          </div>
        </WindowContainer>
      </div>
    </section>
  );
}

// ===== EXAMPLE 4: Multi-Badge Hero =====
export function MultiBadgeHero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-8">
      <BackgroundParticles />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <WindowContainer>
          <WindowHeaderBar title="Full Stack Portfolio" />
          
          <HeroLayout
            leftContent={
              <HeroImage 
                src="/fullstack-photo.jpg"
                alt="Full Stack Developer"
              />
            }
            rightContent={
              <div className="space-y-6">
                {/* Multiple Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                    React Developer
                  </div>
                  <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                    Node.js Expert
                  </div>
                </div>
                
                <HeroText
                  badge="" // Empty since we have custom badges above
                  name="Michael"
                  subtitle="full-stack applications"
                  description="from idea to production."
                />
                
                <HeroButtons
                  primaryText="View Portfolio"
                  secondaryText="Hire Me"
                />
              </div>
            }
          />
        </WindowContainer>
      </div>
    </section>
  );
}

// ===== EXAMPLE 5: CTA-Focused Hero =====
export function CTAHero() {
  const handlePrimary = () => {
    window.location.href = '#contact';
  };

  const handleSecondary = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-8">
      <BackgroundParticles />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <WindowContainer>
          <WindowHeaderBar title="Let's Work Together" />
          
          <div className="p-12 text-center space-y-8">
            <HeroText
              badge="Available for Freelance"
              name="Emma"
              subtitle="innovative digital products"
              description="for startups and enterprises."
              className="items-center"
            />
            
            <div className="max-w-2xl mx-auto text-gray-400 text-lg">
              I specialize in creating scalable, user-friendly applications 
              with cutting-edge technologies. Let's turn your vision into reality.
            </div>
            
            <HeroButtons
              primaryText="Start a Project"
              secondaryText="View My Work"
              onPrimaryClick={handlePrimary}
              onSecondaryClick={handleSecondary}
              className="justify-center"
            />
          </div>
        </WindowContainer>
      </div>
    </section>
  );
}

export default SimpleHero;
