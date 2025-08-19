import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Users, Heart, ArrowRight, Zap, Calendar, MapPin } from "lucide-react";

const offerings = [
  {
    id: "catalyst",
    icon: Smartphone,
    title: "Catalyst",
    subtitle: "White-Label Event App",
    description: "Transform your institution with a fully customizable event platform. Complete branding control, advanced analytics, and seamless integration.",
    features: ["Custom branding", "Advanced analytics", "Multi-event management", "Real-time updates"],
    color: "from-purple-500 to-pink-500",
    badge: "Enterprise"
  },
  {
    id: "campus-crush",
    icon: Users,
    title: "Campus Crush",
    subtitle: "University Student Events",
    description: "The ultimate platform for campus life. From study groups to major festivals, connect students through meaningful experiences.",
    features: ["Campus integration", "Student verification", "Event discovery", "Social features"],
    color: "from-blue-500 to-cyan-500",
    badge: "Most Popular"
  },
  {
    id: "cupid-dating",
    icon: Heart,
    title: "Cupid Dating",
    subtitle: "Events for 20-Somethings",
    description: "Spark real connections through curated dating events. From speed dating to group activities designed for young professionals.",
    features: ["Verified profiles", "Curated events", "Safe environment", "Success matching"],
    color: "from-pink-500 to-red-500",
    badge: "New"
  }
];

const Offerings = () => {
  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Our Solutions</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Three Ways to Connect
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're building an enterprise solution, enhancing campus life, 
            or creating meaningful connections, we've got the perfect platform for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <Card key={offering.id} className={`relative overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in bg-gradient-card`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${offering.color}`}></div>
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${offering.color} shadow-lg`}>
                    <offering.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                    {offering.badge}
                  </span>
                </div>
                
                <CardTitle className="text-2xl font-bold">{offering.title}</CardTitle>
                <CardDescription className="text-base font-medium text-primary">
                  {offering.subtitle}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {offering.description}
                </p>
                
                <div className="space-y-3">
                  {offering.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                 <Button variant="primary" size="sm" className="flex-1">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-12 py-6">
            Get Started Today
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Offerings;