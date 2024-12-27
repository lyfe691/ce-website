import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { StorePreview } from "@/components/StorePreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <VideoSection />
      <StorePreview />
    </div>
  );
};

export default Index;