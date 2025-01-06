import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-primary-dark overflow-hidden">
      {/* Background image and overlay */}
      <div 
        className="absolute inset-0 bg-[url('/blockchain-hero.png')] bg-cover bg-center"
        style={{ backgroundBlendMode: 'overlay' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 to-primary-dark/5" />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            The Future of <span className="text-primary-light">Web3 Streaming</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Experience mobile-first live streaming powered by zkEVM DeFi and AI on Polygon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
              Start Streaming <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-secondary/80 text-white border-white hover:bg-secondary hover:text-white"
            >
              Learn More
            </Button>
          </div>
          <div className="flex justify-center gap-8 pt-8">
            <div className="flex items-center gap-2">
              <Smartphone className="h-6 w-6 text-primary-light" />
              <span className="text-gray-200">Mobile First</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary-light" />
              <span className="text-gray-200">Instant Tips</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};