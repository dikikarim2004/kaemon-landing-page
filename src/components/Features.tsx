import { Bot, Coins, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Optimized streaming experience for mobile devices with intuitive controls",
  },
  {
    icon: Bot,
    title: "AI-Powered Features",
    description: "Enhanced streaming with AI-driven functionality and personalization",
  },
  {
    icon: Coins,
    title: "DeFi Integration",
    description: "Seamless access to DeFi protocols directly within the streaming interface",
  },
  {
    icon: Shield,
    title: "Secure zkEVM",
    description: "Built on Polygon zkEVM for scalable and low-cost transactions",
  },
];

export const Features = () => {
  return (
    <section className="relative py-24">      
    {/*Background image and overlay */}
    <div 
        className="absolute inset-0 bg-[url('/features-bg.png')] bg-cover bg-center"
        style={{ backgroundBlendMode: 'overlay' }}
      />
      <div className="absolute inset-0 bg-white/85" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary">
          Revolutionary Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-secondary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};