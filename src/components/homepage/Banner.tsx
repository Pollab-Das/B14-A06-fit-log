// src/components/homepage/Banner.tsx
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import heroFigure from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="mx-auto max-w-[1280px] px-4 pt-6">
      <div className="relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl bg-[#15171D] px-6 py-10 md:grid-cols-[1.2fr_1fr] md:gap-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
        {/* ---------- Left Content ---------- */}
        <div className="space-y-5 md:space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C2F800] md:text-sm">
            Workout Library
          </p>

          <h1 className="font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Train with intent.
            <br />
            Log every set.
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-[#9CA3AF] md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="pt-2">
            <a
              href="#library"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C2F800] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-all duration-200 hover:bg-[#d4ff3d] hover:scale-[1.02]"
            >
              Browse Workouts
              {<ArrowDown className="h-4 w-4" strokeWidth={3} /> }
            </a>
          </div>
        </div>

        {/* ---------- Right Image ---------- */}
        <div className="relative flex items-center justify-center md:justify-end">
          <div className="relative w-64 sm:w-80 md:w-full md:max-w-md lg:max-w-lg">
            <Image
              src={heroFigure}
              alt="FitLog hero"
              width={600}
              height={600}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_0_40px_rgba(194,248,0,0.08)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;