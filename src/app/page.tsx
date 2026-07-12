import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { PhotoStrip } from "@/components/photo-strip";
import { About } from "@/components/about";
import { Legacy } from "@/components/legacy";
import { Collaborations } from "@/components/collaborations";
import { Festival } from "@/components/festival";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <PhotoStrip />
        <About />
        <Legacy />
        <Collaborations />
        <Festival />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
