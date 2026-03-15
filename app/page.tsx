import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Meista from "@/components/Meista";
import Episodes from "@/components/Episodes";
import Hosts from "@/components/Hosts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Concept />
      <Meista />
      <Episodes />
      <Hosts />
      <Footer />
    </main>
  );
}
