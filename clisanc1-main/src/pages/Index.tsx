import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import BonusSection from "@/components/home/BonusSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProgramsSection />
      <BonusSection />
      <WhyChooseSection />
    </Layout>
  );
};

export default Index;
