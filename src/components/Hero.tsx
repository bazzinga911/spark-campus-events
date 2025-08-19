import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-black leading-tight text-foreground">
                For Uni Students.
                <br />
                <span className="text-primary">By Uni Students.</span>
              </h1>
              
              <p className="text-2xl text-muted-foreground max-w-lg leading-relaxed font-medium">
                Where friends & flings are a few taps away.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" className="text-lg px-8 py-4 rounded-full shadow-button hover:shadow-glow">
                Explore
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4 rounded-full">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right content - Hero image with gradient mask */}
          <div className="relative animate-float">
            <div className="relative overflow-hidden rounded-3xl shadow-card">
              <img 
                src="/hero_candid_group.jpg" 
                alt="University students enjoying campus life together"
                className="w-full aspect-[4/3] object-cover"
                onError={(e) => {
                  // Fallback placeholder if image fails to load
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                }}
              />
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl shadow-card items-center justify-center border-2 border-dashed border-primary/30 hidden">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-primary font-medium">Hero Group Image</p>
                  <p className="text-sm text-muted-foreground">University students connecting</p>
                </div>
              </div>
              {/* Soft gradient mask overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;