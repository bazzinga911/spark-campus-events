import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg gradient-primary"></div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Spark Campus
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#offerings" className="text-muted-foreground hover:text-foreground transition-colors">
              Offerings
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="cta" size="sm">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;