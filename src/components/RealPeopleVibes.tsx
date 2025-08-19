import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const RealPeopleVibes = () => {
  return (
    <section className="py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground">
              Real People. Real Vibes.
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our platform brings together authentic university students looking for genuine connections. 
              Whether it's finding your study squad, your next adventure buddy, or that special someone - 
              we're here to make it happen naturally.
            </p>
            
            <div className="pt-6">
              <Button variant="primary" size="lg" className="text-lg px-8 py-4 rounded-full shadow-button hover:shadow-glow">
                Join the Community
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Banner Image */}
          <div className="mt-12 animate-float">
            <div className="relative overflow-hidden rounded-3xl shadow-card max-w-md mx-auto">
              <img 
                src="/playful_pointing_pair.jpg" 
                alt="Playful university students pointing and having fun"
                className="w-full aspect-[3/4] object-cover"
                onError={(e) => {
                  // Fallback placeholder if image fails to load
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                }}
              />
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl shadow-card items-center justify-center border-2 border-dashed border-primary/30 hidden">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-primary font-medium">Playful Pair</p>
                  <p className="text-sm text-muted-foreground">Students having fun</p>
                </div>
              </div>
              {/* Soft gradient mask overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealPeopleVibes;