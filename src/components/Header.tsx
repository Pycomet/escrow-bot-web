import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="bg-white p-1 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img src="/logo.png" alt="EscrowBot Logo" className="h-10 w-10 object-contain" />
              </div>
              <div className="absolute -inset-1 bg-blue-400/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                EscrowBot
              </span>
              <div className="flex items-center space-x-1">
                <Sparkles className="h-3 w-3 text-blue-500" />
                <span className="text-xs font-medium text-blue-600">Trusted</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group"
            >
              Features
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a 
              href="#security" 
              className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group"
            >
              Security
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a 
              href="#admin" 
              className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group"
            >
              Admin Panel
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a 
              href="#roadmap" 
              className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group"
            >
              Roadmap
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a 
              href="#contact" 
              className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group"
            >
              Contact
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </a>
          </nav>

          {/* Enhanced CTA buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium"
              asChild
            >
              <a href="https://t.me/trusted_escrow_bot_reviews" target="_blank" rel="noopener noreferrer">
                Updates
              </a>
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-medium px-6"
              asChild
            >
              <a href="https://t.me/trusted_escrow_bot" target="_blank" rel="noopener noreferrer">
                Start Trading
              </a>
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="h-6 w-6 text-gray-700" /> : 
              <Menu className="h-6 w-6 text-gray-700" />
            }
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-6 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 shadow-xl animate-slide-up">
            <nav className="flex flex-col space-y-4 px-6">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#security" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Security
              </a>
              <a 
                href="#admin" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin Panel
              </a>
              <a 
                href="#roadmap" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Roadmap
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              
              {/* Mobile CTA buttons */}
              <div className="flex flex-col space-y-3 pt-4 mt-4 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
                  asChild
                >
                  <a href="https://t.me/trusted_escrow_bot_reviews" target="_blank" rel="noopener noreferrer">
                    Updates
                  </a>
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg font-medium"
                  asChild
                >
                  <a href="https://t.me/trusted_escrow_bot" target="_blank" rel="noopener noreferrer">
                    Start Trading
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}