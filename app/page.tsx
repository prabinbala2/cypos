
import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01";
import Feature02 from "@/components/shadcn-space/blocks/feature-02";
import AboutAndStats01 from "@/components/shadcn-space/blocks/about-us-01";
import Services from "@/components/shadcn-space/blocks/services-02/services";
import Pricing from "@/components/shadcn-space/blocks/pricing-01/pricing";
import Footer from "@/components/shadcn-space/blocks/footer-02/footer";

export default function Home() {
  return (
    <>
      <AgencyHeroSection/>
      <Feature02 />
      <AboutAndStats01/>
      <Services />
      <Pricing/>
      <Footer />
    </>
  );
}