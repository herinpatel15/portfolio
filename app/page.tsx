// import Hero from '@/app/(sections)/hero'

import Section from "@/components/Section";
import HeroSection from "./(sections)/heroSection";
import AboutSection from "./(sections)/aboutSection";
import ExperienceSection from "./(sections)/experianceSection";
import ExploreSection from "./(sections)/ExploreSection";
import WorkSection from "./(sections)/WorkSection";
import ScrollLine from "@/components/ScrollLine";
import ProjectSection from "./(sections)/ProjectSection";

// import About from './(sections)/about';
export default function Home() {
  return (
    <main className="bg-bg max-w-screen-xl mx-auto h-full sm:p-5 p-2 overflow-hidden flex flex-col gap-10">
      {/* <Hero />
      <About /> */}
      <Section className="flex flex-col gap-20 sm:p-5 p-2">
        <ScrollLine />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ExploreSection />
        <WorkSection />
        <ProjectSection />
      </Section>
    </main>
  );
}
