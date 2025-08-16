import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Wallet, 
  BarChart3, 
  Eye, 
  PieChart, 
  Users,
  Activity,
  TrendingUp,
  Settings
} from "lucide-react";

export default function AdminFeatures() {
  const adminFeatures = [
    {
      icon: Wallet,
      title: "Wallet Management",
      description: "Comprehensive view and management of all user wallets with real-time balance updates and transaction history.",
      features: ["Multi-currency support", "Balance tracking", "Transaction logs", "Wallet analytics"]
    },
    {
      icon: BarChart3,
      title: "Balance Monitoring",
      description: "Real-time cryptocurrency balance tracking across all supported currencies with automated alerts.",
      features: ["Live price feeds", "Balance alerts", "Historical data", "Portfolio overview"]
    },
    {
      icon: Eye,
      title: "Trade Oversight",
      description: "Monitor all active trades with detailed status tracking and intervention capabilities when needed.",
      features: ["Active trade list", "Status monitoring", "Dispute resolution", "Trade analytics"]
    },
    {
      icon: PieChart,
      title: "System Statistics",
      description: "Comprehensive platform usage analytics with detailed reports and performance metrics.",
      features: ["User analytics", "Trade volume", "Revenue reports", "System health"]
    }
  ];

  const dashboardStats = [
    { number: "1,247", label: "Active Users", trend: "+12%", icon: Users },
    { number: "$2.4M", label: "Total Volume", trend: "+25%", icon: TrendingUp },
    { number: "98.7%", label: "Success Rate", trend: "+2.1%", icon: Activity },
    { number: "342", label: "Active Trades", trend: "+8%", icon: Eye }
  ];

  return (
    <section id="admin" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <Settings className="h-4 w-4" />
            <span>Admin Dashboard</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Admin Controls
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete oversight and management tools for efficient platform administration
          </p>
        </div>

        {/* Dashboard Preview Stats */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 mb-16 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Live Dashboard Preview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {dashboardStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300 mb-2">{stat.label}</div>
                <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                  {stat.trend}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {adminFeatures.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-purple-200 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <Badge variant="outline" className="mt-1">Admin Only</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">{feature.description}</CardDescription>
                <div className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Admin Access CTA */}
        <div className="text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Take Control?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Get access to the admin dashboard and start managing your escrow service with powerful tools and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Request Admin Access
            </Button>
            <Button size="lg" variant="outline">
              View Demo Dashboard
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}