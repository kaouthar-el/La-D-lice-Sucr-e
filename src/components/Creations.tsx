import { Card, CardContent } from "@/components/ui/card";
import macaronsImage from "@/assets/macarons.jpg";
import eclairsImage from "@/assets/eclairs.jpg";
import tartImage from "@/assets/tart.jpg";

const creations = [
  {
    id: 1,
    name: "Macarons Parisiens",
    description: "Délicats biscuits aux amandes, garnis de ganaches parfumées",
    image: macaronsImage,
  },
  {
    id: 2,
    name: "Éclairs Gourmands",
    description: "Pâte à choux légère et crème pâtissière onctueuse",
    image: eclairsImage,
  },
  {
    id: 3,
    name: "Tartes aux Fruits",
    description: "Fruits frais de saison sur une crème pâtissière vanillée",
    image: tartImage,
  },
];

const Creations = () => {
  return (
    <section id="creations" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Nos Créations Signature
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Chaque pâtisserie est une œuvre d'art, confectionnée avec passion et les meilleurs ingrédients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creations.map((creation, index) => (
            <Card 
              key={creation.id}
              className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-smooth bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={creation.image}
                  alt={creation.name}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-chocolate/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {creation.name}
                </h3>
                <p className="text-muted-foreground">
                  {creation.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creations;
