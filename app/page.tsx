import AkwaOchaSection from "@/components/AkwaOchaSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* We add it directly as the first section after the layout Navbar */}
      <AkwaOchaSection />
    </div>
  );
}
