import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary">
          How Kaemon Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Connect Wallet",
              description: "Link your Web3 wallet to start streaming or watching",
            },
            {
              step: "2",
              title: "Create or Watch",
              description: "Start streaming content or discover amazing creators",
            },
            {
              step: "3",
              title: "Earn & Engage",
              description: "Monetize content through tips, tokens, and DeFi integrations",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl font-bold text-primary mr-4">{item.step}</span>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-primary h-8 w-8" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};