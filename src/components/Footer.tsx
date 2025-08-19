import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/connection_catalyst_logo_primary.png" 
                alt="Connection Catalyst" 
                className="h-8 w-auto"
                onError={(e) => {
                  // Fallback to gradient square if logo fails to load
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                }}
              />
              <div className="h-8 w-8 rounded-lg gradient-primary hidden"></div>
              <span className="text-xl font-bold text-foreground">
                Connection Catalyst
              </span>
            </div>
            <p className="text-muted-foreground">
              For uni students, by uni students. Where friends & flings are a few taps away.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Catalyst</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Campus Crush</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cupid Dating</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Enterprise Solutions</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">hello@sparkcampus.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
            </div>
            <Button variant="primary" className="mt-4 w-full rounded-full shadow-button">
              Schedule a Demo
            </Button>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Connection Catalyst Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;