
// import Hero from "@/components/Hero";
// import Features from "@/components/Features";
// import Pricing from "@/components/Pricing";
// import Footer from "@/components/Footer";
// import 'antd/dist/antd.css';
import BannerSection from "../components/BannerSection";
import CaseStudy from "../components/CaseStudy";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogoSection from "../components/LogoSection";
import PricingSection from "../components/PricingSection";
import TopLocation from "../components/TopLocation";



export default function Home() {
  return (
    <>
      <Header />
      <BannerSection />
      <LogoSection />
      <PricingSection />
      <CaseStudy />
      <TopLocation />
      <FAQ />

      <Footer />
    </>
  );
}
