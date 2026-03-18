import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-patisserie.jpg";

const Hero = () => {
  const scrollToCreations = () => {
    document.getElementById("creations")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient">
          La Délice Sucrée
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-foreground/90 font-light max-w-3xl mx-auto">
          L'art de la pâtisserie marocaine où chaque création raconte une histoire de passion et de savoir-faire
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            size="lg"
            onClick={scrollToCreations}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant transition-smooth text-lg px-8"
          >
            Découvrir nos créations
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8"
          >
            Nous contacter
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToCreations}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer bg-transparent border-none"
        aria-label="Scroll to creations"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;