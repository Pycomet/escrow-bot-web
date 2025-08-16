import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Coins, 
  ShoppingCart, 
  Globe, 
  TrendingUp, 
  Users,
  Shield,
  Zap,
  Award
} from "lucide-react";

export default function Roadmap() {
  const roadmapItems = [
    {
      icon: Coins,
      title: "CryptoToCrypto Trades",
      description: "Direct cryptocurrency exchanges with automated escrow verification and multi-chain support.",
      status: "Coming Soon",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: ShoppingCart,
      title: "MarketShop & CryptoToProduct",
      description: "Marketplace flows for sellers and shops, plus product trading with catalog management.",
      status: "Coming Soon",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Globe,
      title: "Expanded Chain Support",
      description: "More chains and tokens including BSC native, TRON native USDT, Polygon, and Layer 2 solutions.",
      status: "Planned",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Award,
      title: "Reputation System",
      description: "Buyer/seller reputation scores, escrow timelines, and auto-release rules to boost trust.",
      status: "Planned",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Users,
      title: "Broker Marketplace",
      description: "Enhanced broker discovery, marketplace features, and escrow co-signing capabilities.",
      status: "Future",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Advanced Admin Tools",
      description: "Fee schedules, comprehensive audits, analytics dashboards, and enhanced reporting.",
      status: "Future",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Globe,
      title: "Multi-Language & KYC",
      description: "Multi-language UX, smart notifications, reminders, and optional KYC hooks for compliance.",
      status: "Future",
      color: "bg-gray-100 text-gray-600"
    },
    {
      icon: Zap,
      title: "Enhanced Webhooks",
      description: "Webhook retry/backoff mechanisms, signed callbacks, and improved integration capabilities.",
      status: "Future",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  const currentFeatures = [
    "CryptoToFiat trades (fully implemented)",
    "Secure blockchain nodes for BTC/LTC",
    "ETH/USDT wallet transfers",
    "Multi-chain wallet creation",
    "Dispute resolution system",
    "Admin oversight tools"
  ];

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Roadmap & Development
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building the future of secure P2P crypto trading on Telegram
          </p>
        </div>

        {/* Current Status */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Currently Live & Available</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-green-50 rounded-lg p-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item, index) => (
            <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {item.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Development Philosophy */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-sm">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Development Approach</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We build features based on real user needs and maintain a "safety first" approach. Each new feature 
            undergoes thorough testing and security review before release to ensure the platform remains secure and reliable.
          </p>
        </div>
      </div>
    </section>
  );
}