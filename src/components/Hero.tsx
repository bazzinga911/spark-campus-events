import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">The Future of Student Events</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Connect.
                </span>
                <br />
                <span className="text-foreground">Celebrate.</span>
                <br />
                <span className="text-foreground">Create.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Empowering students to discover, create, and attend amazing events. 
                From campus-wide celebrations to intimate dating experiences.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Explore Our Platform
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="cta-outline" size="lg" className="text-lg px-8 py-6">
                Get a Quote
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Students Connected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Events Hosted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Universities</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="relative animate-float">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Students at vibrant campus events" 
                className="w-full h-auto rounded-3xl shadow-card"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 gradient-primary rounded-full opacity-20 animate-glow"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 gradient-secondary rounded-full opacity-30 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;