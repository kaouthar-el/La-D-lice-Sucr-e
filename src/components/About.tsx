import { Heart, Award, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Passion du Goût",
    description: "Chaque recette est le fruit d'une recherche constante de l'excellence et de l'équilibre parfait des saveurs",
  },
  {
    icon: Award,
    title: "Savoir-Faire Artisanal",
    description: "Formés aux meilleures techniques de la pâtisserie française, nous perpétuons une tradition d'excellence",
  },
  {
    icon: Sparkles,
    title: "Ingrédients d'Exception",
    description: "Nous sélectionnons avec soin les meilleurs produits, privilégiant qualité et provenance locale",
  },
];

const About = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Notre Histoire
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Depuis notre création, nous partageons notre amour de la pâtisserie à travers des créations 
              qui allient tradition et créativité. Chaque jour, nous mettons notre cœur et notre expertise 
              au service de moments gourmands inoubliables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-smooth animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
