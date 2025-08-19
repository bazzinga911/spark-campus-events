import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Calendar } from "lucide-react";

const ContactPreview = () => {
  return (
    <section id="contact" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground">
              Let's Chat! 💬
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Got questions? Want to bring Connection Catalyst to your campus? 
              Or just want to say hi? We're always down for a good conversation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-4">Quick questions or detailed inquiries</p>
              <Button variant="secondary" size="sm" className="rounded-full">
                hello@connectioncatalyst.com
              </Button>
            </div>
            
            <div className="bg-background rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">DM Us</h3>
              <p className="text-muted-foreground text-sm mb-4">Slide into our socials</p>
              <Button variant="secondary" size="sm" className="rounded-full">
                @ConnectionCatalyst
              </Button>
            </div>
            
            <div className="bg-background rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Book a Call</h3>
              <p className="text-muted-foreground text-sm mb-4">Let's talk business</p>
              <Button variant="primary" size="sm" className="rounded-full shadow-button">
                Schedule Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;