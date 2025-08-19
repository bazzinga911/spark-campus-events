import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Users, Heart, ArrowRight } from "lucide-react";

const offerings = [
  {
    id: "catalyst",
    icon: Smartphone,
    title: "Catalyst",
    subtitle: "White-Label Event App",
    description: "Transform your institution with a fully customizable event platform. Complete branding control, advanced analytics, and seamless integration.",
    features: ["Custom branding", "Advanced analytics", "Multi-event management", "Real-time updates"],
    cta: "DM for a quote",
    ctaVariant: "secondary" as const
  },
  {
    id: "campus-crush",
    icon: Users,
    title: "Campus Crush",
    subtitle: "University Student Events",
    description: "The ultimate platform for campus life. From study groups to major festivals, connect students through meaningful experiences.",
    features: ["Campus integration", "Student verification", "Event discovery", "Social features"],
    cta: "Explore Events",
    ctaVariant: "primary" as const
  },
  {
    id: "cupid-dating",
    icon: Heart,
    title: "Cupid Dating",
    subtitle: "Events for 20-Somethings",
    description: "Spark real connections through curated dating events. From speed dating to group activities designed for young professionals.",
    features: ["Verified profiles", "Curated events", "Safe environment", "Success matching"],
    cta: "Find Love",
    ctaVariant: "primary" as const
  }
];

const WhatAreWe = () => {
  return (
    <section id="what-are-we" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            What Are We?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three powerful ways to connect students, create memories, and build lasting relationships 
            across university campuses and beyond.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <Card key={offering.id} className={`relative overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in bg-background rounded-3xl`} style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader className="relative p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-primary/10 shadow-lg">
                    <offering.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold text-center text-foreground">{offering.title}</CardTitle>
                <CardDescription className="text-base font-medium text-primary text-center">
                  {offering.subtitle}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6 px-8 pb-8">
                <p className="text-muted-foreground leading-relaxed text-center">
                  {offering.description}
                </p>
                
                <div className="space-y-3">
                  {offering.features.map((feature) => (
                    <div key={feature} className="flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center pt-4">
                  <Button variant={offering.ctaVariant} className="rounded-full px-6 py-2 shadow-button hover:shadow-glow">
                    {offering.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatAreWe;