import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { GridBackground } from "./components/grid-background";
import { Projects } from "./components/projects";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <GridBackground />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
