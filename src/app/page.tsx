import HeroSection from "@/components/LandingPage/HeroSection/HeroSection";
import WhoWeAre from "@/components/LandingPage/WhoWeAreSection/WhoWeAre";
import HistorySection from "@/components/LandingPage/HistorySection/HistorySection";
import GallerySection from "@/components/LandingPage/GallerySection/GallerySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <HistorySection />
      <GallerySection />
    </>
  );
}
