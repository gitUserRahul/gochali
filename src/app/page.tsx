import HeroSection from "@/components/LandingPage/HeroSection/HeroSection";
import WhoWeAre from "@/components/LandingPage/WhoWeAreSection/WhoWeAre";
import HistorySection from "@/components/LandingPage/HistorySection/HistorySection";
import GallerySection from "@/components/LandingPage/GallerySection/GallerySection";
import BlogsSection from "@/components/LandingPage/BlogsSection/BlogsSection";
import MapSection from "@/components/LandingPage/MapSection/MapSection";
import GalleryCollection from "@/components/LandingPage/GalleryCollectionSection/GalleryCollection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <HistorySection />
      <GallerySection />
      <BlogsSection />
      <MapSection />
      <GalleryCollection />
    </>
  );
}
