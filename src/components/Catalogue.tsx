import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import chocolateCakeImg from "@/assets/chocolate-cake.jpg";
import eclairsImg from "@/assets/eclairs.jpg";
import fruitTartsImg from "@/assets/fruit-tarts.jpg";
import brioches from "@/assets/brioches.jpg";
import macaronsImg from "@/assets/macarons.jpg";
import petitsFoursImg from "@/assets/petits-fours.jpg";

const categories = [
  { id: "all", name: "Tous" },
  { id: "chocolat", name: "Chocolat" },
  { id: "eclairs", name: "Éclairs" },
  { id: "tartes", name: "Tartes" },
  { id: "brioches", name: "Brioches" },
  { id: "douceurs", name: "Autres Douceurs" },
];

const products = [
  {
    id: 1,
    name: "Gâteau au Chocolat Noir",
    category: "chocolat",
    description: "Un délice fondant au chocolat noir 70%, avec une ganache onctueuse",
    image: chocolateCakeImg,
  },
  {
    id: 2,
    name: "Éclairs Tradition",
    category: "eclairs",
    description: "Éclairs classiques à la vanille ou au chocolat, avec une crème pâtissière maison",
    image: eclairsImg,
  },
  {
    id: 3,
    name: "Tartes aux Fruits de Saison",
    category: "tartes",
    description: "Tartes fraîches garnies des meilleurs fruits de saison, sur une pâte sablée croustillante",
    image: fruitTartsImg,
  },
  {
    id: 4,
    name: "Brioches Artisanales",
    category: "brioches",
    description: "Brioches moelleuses et dorées, préparées chaque matin avec du beurre de qualité",
    image: brioches,
  },
  {
    id: 5,
    name: "Macarons Parisiens",
    category: "douceurs",
    description: "Assortiment de macarons aux saveurs variées, légers et fondants",
    image: macaronsImg,
  },
  {
    id: 6,
    name: "Petits Fours",
    category: "douceurs",
    description: "Sélection de petites gourmandises raffinées, parfaites pour un goûter élégant",
    image: petitsFoursImg,
  },
];

const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Notre Catalogue
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos créations artisanales, préparées chaque jour avec passion
            et des ingrédients d'exception
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-scale-in">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-elegant"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="border-0 shadow-soft hover:shadow-elegant transition-smooth overflow-hidden bg-card animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-bold mb-3 text-foreground">
                  {product.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
