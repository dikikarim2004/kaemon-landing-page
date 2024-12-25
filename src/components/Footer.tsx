import { Phone, MapPin, Twitter, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className="relative bg-secondary py-12 overflow-hidden">
      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      
      {/* City lights effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_#000_70%)] opacity-40" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-light">About Us</h3>
            <p className="text-gray-300">
              Kaemon is revolutionizing Web3 streaming with zkEVM DeFi and AI integration, making content creation and monetization seamless on Polygon.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-light">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary-light" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary-light" />
                <span>123 Blockchain Street, Web3 City, 12345</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-light">Social Media</h3>
            <div className="flex gap-4">
              <a href="https://twitter.com/kaemon" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-primary-light transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://t.me/kaemon" target="_blank" rel="noopener noreferrer"
                 className="hover:text-primary-light transition-colors">
                <Send className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-light">Newsletter</h3>
            <p className="text-gray-300">Stay updated with our latest features and releases.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kaemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};