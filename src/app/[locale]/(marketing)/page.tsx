import { HeroSection } from "@/components/sections/hero";
import { ReviewBar } from "@/components/sections/review-bar";
import { SolutionReveal } from "@/components/sections/solution-reveal";
import { USPShowcase } from "@/components/sections/usp-showcase";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { GeoNetSection } from "@/components/sections/geo-net";
import { VoiceGuardSection } from "@/components/sections/voice-guard";
import { AnalysisForm } from "@/components/sections/analysis-form";
import { FinalCTA } from "@/components/sections/final-cta";
import { NewsletterSection } from "@/components/sections/newsletter";
import { HeroScrollDemo } from "@/components/sections/hero-scroll-demo";
import { PerformanceSection } from "@/components/sections/performance";
import { WebMarketingSection } from "@/components/sections/web-marketing";
import { RevierBackground } from "@/components/ui/revier-background";
import { ScrollGuide } from "@/components/ui/scroll-guide";
import { SectionTrailDivider } from "@/components/ui/section-trail-divider";

export default function MarketingPage() {
  return (
    <main className="relative min-h-screen bg-deep-navy">
      <ScrollGuide />
      <HeroSection />
      <ReviewBar />
      <SolutionReveal />
      
      {/* Divider 1: Zwischen Scroll Story und "Deine Digitale Werkstatt" */}
      <SectionTrailDivider />
      <HeroScrollDemo /> {/* USP Intro */}
      
      <div className="relative">
        <RevierBackground variant="grid" />
        <USPShowcase />   {/* Bento Overview */}
      </div>
      
      {/* Divider 2: Zwischen "Vorsprung durch Technik" und "Umsatz & Anfragen" */}
      <SectionTrailDivider />
      
      {/* Detailed USP Deep Dives */}
      <div className="relative">
        <RevierBackground variant="grid" />
        <PerformanceSection />
      </div>
      <div className="relative">
        <RevierBackground variant="grid" />
        <VoiceGuardSection />
      </div>
      <div className="relative">
        <RevierBackground variant="grid" />
        <GeoNetSection />
      </div>
      <div className="relative">
        <RevierBackground variant="grid" />
        <WebMarketingSection />
      </div>
      
      {/* Divider 3: Zwischen "Websites & Marketing" und "Erfolgsgeschichten" */}
      <SectionTrailDivider />
      
      <div className="relative">
        <RevierBackground variant="grid" />
        <CaseStudiesSection />
      </div>
      
      {/* Divider 4: Zwischen "Möchtest du die nächste Erfolgsgeschichte sein?" und "Kostenlos & Unverbindlich" */}
      <SectionTrailDivider />
      
      <div className="relative">
        <RevierBackground variant="grid" />
        <FinalCTA />
      </div>
      <div className="relative">
        <RevierBackground variant="grid" />
        <AnalysisForm />
      </div>
      <div className="relative">
        <RevierBackground variant="grid" />
        <NewsletterSection />
      </div>
    </main>
  );
}
