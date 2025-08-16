import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Key, 
  Database, 
  FileCheck, 
  UserCheck,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  Sparkles
} from "lucide-react";

export default function Security() {
  const securityFeatures = [
    {
      icon: Key,
      title: "Multi-Signature Wallets",
      description: "Enhanced security with multiple signature requirements for all transactions, preventing unauthorized access and ensuring maximum fund protection.",
      level: "Enterprise Grade",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100"
    },
    {
      icon: Database,
      title: "Military-Grade Encryption",
      description: "All sensitive data is encrypted using industry-standard AES-256 encryption with additional layers of protection for ultimate security.",
      level: "Military Grade",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100"
    },
    {
      icon: FileCheck,
      title: "Complete Audit Trails",
      description: "Every transaction and action is logged with immutable records for full transparency, compliance, and forensic analysis capabilities.",
      level: "Regulatory Compliant",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100"
    },
    {
      icon: UserCheck,
      title: "Zero-Trust Architecture",
      description: "Restricted access to sensitive operations with role-based permissions, multi-factor authentication, and continuous verification.",
      level: "Zero Trust",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100"
    }
  ];

  const securityStats = [
    { number: "256-bit", label: "Encryption Standard", icon: Lock, color: "from-blue-500 to-blue-600" },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield, color: "from-emerald-500 to-emerald-600" },
    { number: "24/7", label: "Security Monitoring", icon: Eye, color: "from-purple-500 to-purple-600" },
    { number: "Zero", label: "Security Breaches", icon: CheckCircle, color: "from-green-500 to-green-600" }
  ];

  return (
    <section id="security" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-red-500/30">
            <Shield className="h-4 w-4" />
            <span>Bank-Level Security</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Uncompromising</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Security
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your funds and data are protected by enterprise-grade security measures that exceed 
            industry standards and rival those used by major financial institutions.
          </p>
        </div>

        {/* Enhanced Security Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {securityStats.map((stat, index) => (
            <div 
              key={index} 
              className="group text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover-lift animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative mb-4">
                <div className={`bg-gradient-to-br ${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
                <div className={`absolute -inset-1 bg-gradient-to-br ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {securityFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover-lift animate-slide-up"
              style={{animationDelay: `${(index + 4) * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className={`absolute -inset-1 bg-gradient-to-br ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className="text-xs bg-white/10 border-white/30 text-gray-200 hover:bg-white/20 transition-colors duration-300"
                  >
                    {feature.level}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-300 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Security Promise */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center border border-white/20 shadow-2xl animate-slide-up" style={{animationDelay: '0.8s'}}>
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-emerald-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-2xl animate-pulse-glow">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl blur opacity-20"></div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Security Promise
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We employ the same security standards used by major financial institutions and government agencies. 
              Your funds are protected by multi-layered security protocols, continuous monitoring, and regular 
              security audits by third-party experts.
            </p>
            
            {/* Security certifications */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">PCI DSS Level 1</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://t.me/trusted_escrow_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Secure Trading
                <Sparkles className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#features" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View All Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}