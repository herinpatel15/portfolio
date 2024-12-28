import Hero from '@/app/(sections)/hero'
import About from './(sections)/about';
export default function Home() {
  return (
    <main className="bg-bg max-w-screen-xl mx-auto h-full p-5 overflow-hidden flex flex-col gap-10">
      <Hero />
      <About />
    </main>
  );
}
