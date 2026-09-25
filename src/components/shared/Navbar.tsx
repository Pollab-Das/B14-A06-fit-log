// src/components/shared/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { useWorkouts } from "@/context/WorkoutsContext";

const Navbar = () => {
  const pathname = usePathname();
  const { myPlan, saved } = useWorkouts();

  const isWorkouts = 
  pathname === "/" || pathname.startsWith("/workouts");
  const isMyPlan = pathname.startsWith("/my-plan");

  const linkBase =
    "px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0C0D10] border-b border-[#222630]">
      <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
    {/* ---------- Logo ---------- */}
<Link href="/" className="flex items-center gap-2">
  <Image
    src={logo}
    alt="FitLog"
    width={28}
    height={28}
    className="h-7 w-7 object-contain"
  />
  <span className="font-heading text-2xl font-bold tracking-wide text-white">
    FITLOG
  </span>
</Link>
        {/* ---------- Center Navigation ---------- */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/workouts"
            className={`${linkBase} ${
              isWorkouts
                ? "bg-[#1A2312] text-[#C2F800]"
                : "text-[#9CA3AF] hover:text-white"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`${linkBase} ${
              isMyPlan
                ? "bg-[#1A2312] text-[#C2F800]"
                : "text-[#9CA3AF] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* ---------- Right Status ---------- */}
        <div className="flex items-center gap-6">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm text-white hover:text-[#C2F800] transition-colors"
          >
            <span>Plan</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[11px] font-bold text-black">
              {myPlan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm text-white hover:text-[#C2F800] transition-colors"
          >
            <span>Saved</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#222630] bg-transparent text-[11px] font-bold text-white">
              {saved.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;