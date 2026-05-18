import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { GridBackground } from "./components/grid-background";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { Stats } from "./components/stats";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <GridBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Stats />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
