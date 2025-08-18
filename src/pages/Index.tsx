import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Offerings />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
