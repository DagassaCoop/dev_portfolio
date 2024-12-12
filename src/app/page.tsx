// Sections
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";

// Components
import { FloatingNav } from "@/components/ui/FloatingNav";

// Mock
import { navItems } from "@/mock";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
