import { useState } from "react";
import { X } from "lucide-react";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/table_group_smiles.jpg",
      alt: "Group of friends smiling around a table",
      placeholder: "Table Group Smiles"
    },
    {
      src: "/balcony_group_night.JPG",
      alt: "Students enjoying the night on a balcony",
      placeholder: "Balcony Night Vibes"
    },
    {
      src: "/table_speed_dates_portrait.jpg",
      alt: "Speed dating event with students",
      placeholder: "Speed Dating Event"
    }
  ];

  return (
    <>
      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Moments that matter. Connections that last. See the magic happen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-3xl shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in cursor-pointer group"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback placeholder if image fails to load
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                  }}
                />
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl shadow-card items-center justify-center border-2 border-dashed border-primary/30 hidden">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📸</span>
                    </div>
                    <p className="text-primary font-medium">{image.placeholder}</p>
                    <p className="text-sm text-muted-foreground">Student memories</p>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery image" 
              className="w-full h-auto rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
