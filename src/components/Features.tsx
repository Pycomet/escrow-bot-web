import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Coins, 
  CreditCard, 
  MessageSquare, 
  CheckCircle,
  Zap,
  Lock,
  TrendingUp,
  Sparkles
} from "lucide-react";

export default function Features() {
  const coreFeatures = [
    {
      icon: Shield,
      title: "Safe by Design",
      description: "Funds stay locked in escrow until both parties confirm completion. Clear stages from setup to completion with status updates.",
      badge: "Core Feature",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: MessageSquare,
      title: "All in Telegram",
      description: "No new apps needed. Clean menus, inline buttons, and progress-aware prompts guide every step of your trade.",
      badge: "Easy to Use",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: CreditCard,
      title: "Flexible Payments",
      description: "Pay via our secure blockchain nodes for BTC/LTC or direct wallet transfers for ETH/USDT and other supported assets. We manage our own nodes for enhanced security.",
      badge: "Flexible",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Coins,
      title: "Multi-Asset Support",
      description: "Bitcoin, Ethereum, Solana, Litecoin, Dogecoin, USDT with real-time on-chain balance checks and wallet creation.",
      badge: "Popular",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    }
  ];

  const additionalFeatures = [
    {
      icon: CheckCircle,
      title: "Built-in Dispute Handling",
      description: "Simple dispute button, admin review, and fair final decisions keep trades secure.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Broker & Affiliate Friendly",
      description: "Optional broker involvement with commissions, ratings, and affiliate workflows for growth.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Trade Management",
      description: "Create trades via /trade, cancel with /cancel, check /status, and view complete history.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Lock,
      title: "Secure Wallet Creation",
      description: "Generate wallets in-bot for multiple chains with encrypted private key storage.",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need for
            <span className="block text-gradient-blue">Safe Trading</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built with enterprise-grade security and user-friendly design to make cryptocurrency trading 
            accessible, secure, and efficient for everyone.
          </p>
        </div>

        {/* Core Features - Enhanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {coreFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className={`group hover-lift hover:${feature.borderColor} transition-all duration-500 bg-white/80 backdrop-blur-sm border-2 ${feature.borderColor} hover:shadow-2xl animate-scale-in`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className={`absolute -inset-1 bg-gradient-to-br ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`${feature.bgColor} text-gray-700 border-0 px-3 py-1 font-medium`}
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features - Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="group text-center hover-lift bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{animationDelay: `${(index + 4) * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="relative mb-6">
                  <div className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className={`absolute -inset-1 bg-gradient-to-br ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlight Section */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl animate-slide-up" style={{animationDelay: '0.8s'}}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Secure Trading?
            </h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join thousands of users who trust our platform for their cryptocurrency trading needs. 
              Start your first secure trade in less than 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://t.me/trusted_escrow_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Started Now
                <Sparkles className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://t.me/trusted_escrow_bot_reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}