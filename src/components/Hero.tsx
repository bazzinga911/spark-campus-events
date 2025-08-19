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
            <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                <span className="text-foreground">Bringing</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Students
                </span>
                <br />
                <span className="text-foreground">Together</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                The premier platform connecting students through unforgettable events. 
                From campus celebrations to meaningful connections.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Explore
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="cta-outline" size="lg" className="text-lg px-8 py-6">
                Learn More
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
          
          {/* Right content - Placeholder for event images */}
          <div className="relative animate-float">
            <div className="relative">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl shadow-card flex items-center justify-center border-2 border-dashed border-primary/30">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-primary font-medium">Your Event Images Here</p>
                  <p className="text-sm text-muted-foreground">Upload amazing student event photos</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
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