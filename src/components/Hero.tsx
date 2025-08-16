import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Zap, Star, TrendingUp, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-emerald-600/10"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-40 right-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-slide-up">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-blue-800 px-4 py-2 rounded-full text-sm font-medium border border-white/30">
              <Shield className="h-4 w-4" />
              <span>Bank-Level Security</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-emerald-800 px-4 py-2 rounded-full text-sm font-medium border border-white/30">
              <CheckCircle className="h-4 w-4" />
              <span>99.9% Success Rate</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-purple-800 px-4 py-2 rounded-full text-sm font-medium border border-white/30">
              <Star className="h-4 w-4" />
              <span>5000+ Happy Users</span>
            </div>
          </div>
          
          {/* Main content */}
          <div className="text-center mb-16 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-gray-900">Secure P2P</span>
              <br />
              <span className="text-gradient-blue">Crypto Trading</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-600 mt-4 block">
                Inside Telegram
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              Start, join, and complete peer-to-peer crypto deals with funds protected in escrow. 
              <span className="font-semibold text-blue-600"> No new apps needed</span> - everything happens in Telegram with 
              <span className="font-semibold text-emerald-600"> enterprise-grade security</span>.
            </p>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                className="text-xl px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-0 animate-glow"
                asChild
              >
                <a href="https://t.me/trusted_escrow_bot" target="_blank" rel="noopener noreferrer">
                  Start Trading Now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-xl px-12 py-6 bg-white/80 backdrop-blur-sm border-2 border-gray-300 hover:bg-white hover:border-blue-400 hover:text-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <a href="https://t.me/trusted_escrow_bot_reviews" target="_blank" rel="noopener noreferrer">
                  View Live Updates
                </a>
              </Button>
            </div>
          </div>
          
          {/* Enhanced feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center group animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 animate-pulse-glow">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -inset-2 bg-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">100% Secure</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Multi-signature wallets, encrypted storage, and automated escrow protection</p>
            </div>
            
            <div className="text-center group animate-scale-in" style={{animationDelay: '0.6s'}}>
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 animate-pulse-glow">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -inset-2 bg-emerald-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Instant processing with real-time updates and automated workflows</p>
            </div>
            
            <div className="text-center group animate-scale-in" style={{animationDelay: '0.8s'}}>
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 animate-pulse-glow">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -inset-2 bg-purple-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">User Friendly</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Simple Telegram interface with guided workflows and 24/7 support</p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up" style={{animationDelay: '1s'}}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-blue mb-2">$2M+</div>
              <div className="text-gray-600 font-medium">Volume Secured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-blue mb-2">5K+</div>
              <div className="text-gray-600 font-medium">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-blue mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-blue mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}