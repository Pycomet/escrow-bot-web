import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Shield, Coins, CheckCircle, ArrowRight, Sparkles, Clock, Users } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Start a Trade",
      description: "Use /trade command to create a new trade or join an existing one with clear details and terms.",
      details: "CryptoToFiat (live), CryptoToCrypto, MarketShop & CryptoToProduct (coming soon)",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      time: "< 30 seconds"
    },
    {
      step: "02", 
      icon: Shield,
      title: "Secure Setup",
      description: "Bot auto-generates payment instructions and URLs. Funds are locked in escrow for safety.",
      details: "Secure blockchain node payments for BTC/LTC, wallet transfers for ETH/USDT",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      time: "Instant"
    },
    {
      step: "03",
      icon: Coins,
      title: "Make Payment",
      description: "Buyer pays using the provided instructions while funds remain protected in escrow.",
      details: "Real-time tracking from pending to awaiting confirmation",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      time: "1-5 minutes"
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Confirm & Release",
      description: "Both parties confirm completion and funds are released automatically with full audit trail.",
      details: "Dispute button available if issues arise for admin resolution",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      time: "Automatic"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            How It
            <span className="block text-gradient-blue">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Simple, secure, and automated trading in just four easy steps. 
            Our streamlined process ensures maximum security with minimal complexity.
          </p>
        </div>

        {/* Enhanced Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative group animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-blue-300 transition-all duration-500 hover-lift group-hover:shadow-2xl">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-6">
                    {/* Step number */}
                    <div className="absolute -top-4 -right-4 z-10">
                      <div className={`bg-gradient-to-br ${step.color} text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg animate-pulse-glow`}>
                        {step.step}
                      </div>
                    </div>
                    
                    {/* Icon container */}
                    <div className="relative">
                      <div className={`bg-gradient-to-br ${step.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                        <step.icon className="h-10 w-10 text-white" />
                      </div>
                      <div className={`absolute -inset-2 bg-gradient-to-br ${step.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    </div>
                    
                    {/* Time indicator */}
                    <div className="mt-4">
                      <Badge variant="secondary" className={`${step.bgColor} text-gray-700 border-0 px-3 py-1 font-medium`}>
                        <Clock className="h-3 w-3 mr-1" />
                        {step.time}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <CardDescription className="text-lg text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </CardDescription>
                  <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3 border-l-4 border-blue-300">
                    {step.details}
                  </div>
                </CardContent>
              </Card>
              
              {/* Enhanced Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="bg-white rounded-full p-2 shadow-lg border-2 border-blue-200 animate-pulse-glow">
                    <ArrowRight className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Escrow Service?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of traders worldwide with proven results and unmatched security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -inset-1 bg-green-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:text-green-700 transition-colors duration-300">99.9%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
              <div className="text-sm text-gray-500 mt-1">Over 10,000 completed trades</div>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -inset-1 bg-blue-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">&lt;5min</div>
              <div className="text-gray-600 font-medium">Average Setup Time</div>
              <div className="text-sm text-gray-500 mt-1">From start to escrow activation</div>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -inset-1 bg-purple-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:text-purple-700 transition-colors duration-300">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
              <div className="text-sm text-gray-500 mt-1">Human support when you need it</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://t.me/trusted_escrow_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your First Trade
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://t.me/trusted_escrow_bot_reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
              >
                View Live Updates
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}