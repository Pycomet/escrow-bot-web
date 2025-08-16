import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Security from "@/components/Security";
import AdminFeatures from "@/components/AdminFeatures";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Security />
      <AdminFeatures />
      <Footer />
    </div>
  );
}