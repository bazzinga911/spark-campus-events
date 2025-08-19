import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatAreWe from "@/components/WhatAreWe";
import SocialProof from "@/components/SocialProof";
import RealPeopleVibes from "@/components/RealPeopleVibes";
import ImageGallery from "@/components/ImageGallery";
import ContactPreview from "@/components/ContactPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhatAreWe />
        <SocialProof />
        <RealPeopleVibes />
        <ImageGallery />
        <ContactPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
