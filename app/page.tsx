import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"

export const metadata: Metadata = {
  title: "Website Code Extractor",
  description:
    "Extract, view, and copy any website's source code in one click.",
}

export default function Home() {
  return <HeroSection />
}
