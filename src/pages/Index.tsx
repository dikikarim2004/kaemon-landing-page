import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Futuristic System Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-secondary bg-opacity-95" />
        <div 
          className="absolute inset-0 bg-[url('/blockchain-system.png')] bg-cover bg-center opacity-10"
          style={{ backgroundBlendMode: 'overlay' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(155,135,245,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_800px,rgba(155,135,245,0.15),transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <Footer />
      </div>
    </div>
  );
};

export default Index;