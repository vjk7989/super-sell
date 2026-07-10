"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/common/Button";

type HeroSlide = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  backgroundPosition: string;
  foregroundPosition: string;
};

const heroSlides: HeroSlide[] = [
  {
    image: "/editorial/hero-model-ivory-optimized.webp",
    alt: "Model wearing an ivory handcrafted dress in the Love Loom studio",
    eyebrow: "Woven with love, made to last",
    title: "Handcrafted pieces for beautiful everyday rituals.",
    description:
      "Discover calm feminine silhouettes, tactile linen, and thoughtful details curated for slow mornings, workdays, and celebrations.",
    primaryCta: { label: "Shop the collection", href: "/products" },
    secondaryCta: { label: "Explore categories", href: "/categories" },
    backgroundPosition: "58% center",
    foregroundPosition: "right top"
  },
  {
    image: "/editorial/model-dusty-rose-optimized.webp",
    alt: "Model in a dusty rose handcrafted outfit styled in natural daylight",
    eyebrow: "Soft tailoring, personal styling",
    title: "Loved-by-many looks with a quiet luxury finish.",
    description:
      "Browse best sellers in blush, ivory, sage, and champagne tones, then message us for sizing and availability.",
    primaryCta: { label: "View best sellers", href: "/products" },
    secondaryCta: { label: "Shop by brand", href: "/brands" },
    backgroundPosition: "54% center",
    foregroundPosition: "right top"
  },
  {
    image: "/editorial/model-sage-kurta-optimized.webp",
    alt: "Model wearing a sage kurta set with handcrafted textile details",
    eyebrow: "Authentic Indian wear, made easy",
    title: "From studio previews to wardrobe staples.",
    description:
      "Find breathable kurta sets, linen separates, and pieces made to feel graceful long after the first wear.",
    primaryCta: { label: "Shop new arrivals", href: "/products" },
    secondaryCta: { label: "Upcoming pop-ups", href: "#upcoming-events" },
    backgroundPosition: "50% center",
    foregroundPosition: "right top"
  }
];

const AUTOPLAY_MS = 6000;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const pointerStartX = useRef<number | null>(null);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex((index + heroSlides.length) % heroSlides.length);
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % heroSlides.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      return;
    }

    const timer = window.setInterval(goToNext, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [goToNext, isPaused, prefersReducedMotion]);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    if (pointerStartX.current === null) {
      return;
    }

    const distance = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(distance) < 48) {
      return;
    }

    if (distance > 0) {
      goToPrevious();
    } else {
      goToNext();
    }
  };

  const activeSlide = heroSlides[activeIndex];

  return (
    <section
      aria-label="Love Loom featured collections"
      aria-roledescription="carousel"
      className="group relative min-h-[min(640px,78vh)] touch-pan-y overflow-hidden border-b border-line bg-panel pt-18 outline-none md:pt-20"
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerCancel={() => {
        pointerStartX.current = null;
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      tabIndex={0}
    >
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            aria-hidden={index !== activeIndex}
            className={`absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            key={slide.title}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              aria-hidden="true"
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className="scale-105 object-cover blur-xl"
              style={{ objectPosition: slide.backgroundPosition }}
            />
            <div className="absolute inset-0 bg-bg/18" />
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              {...(index === 0 ? { priority: true } : { loading: "lazy" as const })}
              sizes="100vw"
              className="object-contain object-right-top"
              style={{ objectPosition: slide.foregroundPosition }}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-bg/96 via-bg/78 to-bg/8" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg/55 to-transparent" />

      <div className="container-shell relative flex min-h-[calc(min(640px,78vh)-4.5rem)] items-center py-7 md:py-8">
        <div
          aria-live="polite"
          aria-atomic="true"
          className="max-w-lg rounded-[1.5rem] border border-white/50 bg-bg/72 p-5 shadow-soft backdrop-blur-sm md:bg-bg/60"
        >
          <p className="mb-3 max-w-max border-b border-accent/70 pb-2 text-sm font-bold text-primary">
            {activeSlide.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1] sm:text-5xl xl:text-6xl [text-wrap:balance]">
            {activeSlide.title}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-ink/78 [text-wrap:pretty]">
            {activeSlide.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={activeSlide.primaryCta.href}>
              {activeSlide.primaryCta.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            <Button href={activeSlide.secondaryCta.href} variant="ghost">
              {activeSlide.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>

      <div className="container-shell absolute inset-x-0 bottom-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              aria-current={index === activeIndex}
              aria-label={`Show slide ${index + 1}: ${slide.title}`}
              className={`h-2.5 rounded-full border border-primary/30 transition-all duration-300 focus-ring motion-reduce:transition-none ${
                index === activeIndex ? "w-9 bg-primary" : "w-2.5 bg-bg/80 hover:bg-accent"
              }`}
              key={slide.title}
              onClick={() => goToSlide(index)}
              type="button"
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Show previous hero slide"
            className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-line bg-bg/85 text-ink shadow-soft transition hover:border-accent hover:bg-surface"
            onClick={goToPrevious}
            type="button"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
          </button>
          <button
            aria-label="Show next hero slide"
            className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-line bg-bg/85 text-ink shadow-soft transition hover:border-accent hover:bg-surface"
            onClick={goToNext}
            type="button"
          >
            <ArrowRight aria-hidden="true" className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
