import { useState, FormEvent } from "react";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendForm } from "@emailjs/browser";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "123 Rue de la XXX, Casablanca, Maroc",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+212 612552263",
  },
  {
    icon: Mail,
    title: "Email",
    content: "Kawtarmansouri@gmail.com",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun–Sam : 9h–00h | Dim : 9h–23h",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.currentTarget,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        toast({
          title: "Message envoyé !",
          description: "Merci pour votre message, je vous répondrai très bientôt.",
        });

        setFormData({
          user_name: "",
          user_email: "",
          user_phone: "",
          message: "",
        });
      })
      .catch(() => {
        toast({
          title: "Erreur",
          description: "Une erreur s'est produite, veuillez réessayer.",
          variant: "destructive",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Contactez-Nous
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Une question ? Une commande spéciale ? N'hésitez pas à nous écrire,
            nous serons ravis de vous répondre.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Formulaire */}
          <Card className="border-0 shadow-soft bg-card">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-foreground">
                Envoyez-nous un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="user_name"
                  placeholder="Nom"
                  value={formData.user_name}
                  onChange={(e) =>
                    setFormData({ ...formData, user_name: e.target.value })
                  }
                  required
                />

                <Input
                  name="user_email"
                  type="email"
                  placeholder="Email"
                  value={formData.user_email}
                  onChange={(e) =>
                    setFormData({ ...formData, user_email: e.target.value })
                  }
                  required
                />

                <Input
                  name="user_phone"
                  placeholder="Téléphone"
                  value={formData.user_phone}
                  onChange={(e) =>
                    setFormData({ ...formData, user_phone: e.target.value })
                  }
                />

                <Textarea
                  name="message"
                  placeholder="Message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Envoi..." : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Infos */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-0 shadow-soft bg-card">
                  <CardContent className="p-6 flex items-center gap-4">
                    <Icon className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-bold">{info.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {info.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;