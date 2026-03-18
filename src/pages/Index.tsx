import Hero from "@/components/Hero";
import Creations from "@/components/Creations";
import About from "@/components/About";
import Catalogue from "@/components/Catalogue";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Creations />
      <About />
      <Catalogue />
      <Contact />
      
      <footer className="bg-chocolate text-cream py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2026 La Délice Sucrée. Tous droits réservés.
          </p>
          <p className="text-xs mt-2 opacity-80">
            Kaouthar El Mansouri
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
