import { Shield, Mail, MessageSquare, Github, Twitter, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Enhanced Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -inset-1 bg-blue-400/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  EscrowBot
                </span>
                <div className="flex items-center space-x-1">
                  <Sparkles className="h-3 w-3 text-blue-400" />
                  <span className="text-xs font-medium text-blue-400">Trusted Platform</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The most secure cryptocurrency trading platform with automated escrow service on Telegram. 
              Trusted by thousands of traders worldwide.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-white hover:bg-white/10 p-3 rounded-xl transition-all duration-300 group border border-gray-700 hover:border-gray-600"
              >
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-white hover:bg-white/10 p-3 rounded-xl transition-all duration-300 group border border-gray-700 hover:border-gray-600"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-white hover:bg-white/10 p-3 rounded-xl transition-all duration-300 group border border-gray-700 hover:border-gray-600"
                asChild
              >
                <a href="https://t.me/trusted_escrow_bot_reviews" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </Button>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Features</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#features" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span>Secure Escrow</span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span>Multi-Crypto Support</span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span>Blockchain Security</span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span>Telegram Bot</span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Security</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#security" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span>Multi-Signature Wallets</span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="#security" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span>Military-Grade Encryption</span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="#security" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span>Complete Audit Trails</span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="#security" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span>Zero-Trust Architecture</span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
            </ul>
          </div>

          {/* Enhanced Get Started */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Get Started</h3>
            <div className="space-y-4">
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-medium"
                asChild
              >
                <a href="https://t.me/trusted_escrow_bot" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Start on Telegram
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-gray-600 text-gray-300 hover:bg-white/10 hover:text-white hover:border-gray-500 transition-all duration-300 font-medium"
                asChild
              >
                <a href="https://t.me/trusted_escrow_bot_reviews" target="_blank" rel="noopener noreferrer">
                  <Mail className="mr-2 h-4 w-4" />
                  Updates Channel
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="h-4 w-4 text-green-400" />
                <span>5000+ Active Users</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="h-4 w-4 text-green-400" />
                <span>$2M+ Volume Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="h-4 w-4 text-green-400" />
                <span>99.9% Success Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 EscrowBot. All rights reserved. Built for secure crypto trading with ❤️
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
              >
                Documentation
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
              >
                Support
              </a>
            </div>
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
              <span className="flex items-center space-x-1">
                <Shield className="h-3 w-3" />
                <span>SOC 2 Compliant</span>
              </span>
              <span className="flex items-center space-x-1">
                <Shield className="h-3 w-3" />
                <span>ISO 27001 Certified</span>
              </span>
              <span className="flex items-center space-x-1">
                <Shield className="h-3 w-3" />
                <span>PCI DSS Level 1</span>
              </span>
              <span className="flex items-center space-x-1">
                <Shield className="h-3 w-3" />
                <span>24/7 Monitoring</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}