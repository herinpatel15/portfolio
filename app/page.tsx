// import Hero from '@/app/(sections)/hero'

import Section from "@/components/Section";
import HeroSection from "./(sections)/heroSection";
import AboutSection from "./(sections)/aboutSection";
import ExperienceSection from "./(sections)/experianceSection";

// import About from './(sections)/about';
export default function Home() {
  return (
    <main className="bg-bg max-w-screen-xl mx-auto h-full sm:p-5 p-2 overflow-hidden flex flex-col gap-10">
      {/* <Hero />
      <About /> */}
      <Section className="flex flex-col gap-20 md:p-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
      </Section>
    </main>
  );
}
