import AkwaOchaSection from "@/components/AkwaOchaSection";
import IntroductionSection from "@/components/IntroductionSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* We add it directly as the first section after the layout Navbar */}
      <AkwaOchaSection />
      
      {/* Hero / Information Section with Dynamic Map Masking */}
      <IntroductionSection />
    </div>
  );
}
