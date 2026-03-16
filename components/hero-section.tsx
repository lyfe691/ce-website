"use client"

import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import StaggeredText from "@/components/staggered-text"
import { ArrowRight, Star } from "lucide-react"

const StarSwipe = dynamic(() => import("@/components/star-swipe"), {
  ssr: false,
})

export default function HeroSection() {
  const { resolvedTheme } = useTheme()
  const dark = resolvedTheme === "dark"

  return (
    <div className="relative min-h-svh overflow-hidden">
      {/* Star swipe bg */}
      <div className="absolute inset-0">
        <StarSwipe
          speed={0.25}
          scale={1.5}
          warpStrength={1.5}
          scrollSpeed={4}
          colorIntensity={dark ? 0.08 : 0.04}
          colorSeparation={0.2}
          noiseAmount={0.2}
          rotation={-30}
          color={dark ? "#7a7a6e" : "#3a3a34"}
          backgroundColor={dark ? "#131311" : "#fafaf8"}
          opacity={1}
        />
      </div>

      {/* Vignette — keeps center readable */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,var(--color-background)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6">
        <div className="mb-7 flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 backdrop-blur-sm">
          <div className="flex gap-px">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">2,000+ users</span>
        </div>

        <StaggeredText
          text="Website Code Extractor"
          as="h1"
          className="text-center text-4xl font-semibold tracking-tight sm:text-5xl"
          segmentBy="words"
          delay={50}
          duration={0.4}
          direction="bottom"
          blur
        />

        <p className="mt-5 max-w-sm text-center text-base leading-relaxed text-muted-foreground">
          Extract, view, and copy the complete source code of any webpage in one
          click.
        </p>

        <a href="#" className={cn(buttonVariants({ size: "lg" }), "mt-9")}>
          Add to Chrome — Free
          <ArrowRight className="size-4" data-icon="inline-end" />
        </a>
      </div>
    </div>
  )
}
