import About from "@/components/home/about/About";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/projects/Projects";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function Home() {
  return (
    <main>
      <ScrollIndicator/>
      <Hero />

      <Projects/>

      <About/>
    </main>
  );
}