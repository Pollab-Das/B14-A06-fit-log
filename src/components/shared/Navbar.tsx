// src/components/shared/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useWorkouts } from "@/context/WorkoutsContext";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { myPlan, saved } = useWorkouts();
  const [navigating, setNavigating] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isWorkouts =
    pathname === "/" || pathname.startsWith("/workouts");
  const isMyPlan = pathname.startsWith("/my-plan");

  const linkBase =
    "px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200";

  // Navigate 
  const handleNavigate = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (pathname === href) return;
    setNavigating(true);
    router.push(href);
    setTimeout(() => setNavigating(false), 400);
  };

  return (
    <>
      {/* spinner */}
      {navigating && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0C0D10]/95 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#222630] border-t-[#C2F800]" />
            <p className="mt-4 text-sm font-medium text-[#9CA3AF]">
              Loading...
            </p>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 w-full bg-[#0C0D10] border-b border-[#222630]">
        <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
          {/* --- Logo --- */}
          <button
            onClick={handleNavigate("/")}
            className="flex items-center gap-2 cursor-pointer bg-transparent border-0"
          >
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
          </button>

          {/*Center Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            <button
              onClick={handleNavigate("/")}
              className={`${linkBase} cursor-pointer ${
                isWorkouts
                  ? "bg-[#1A2312] text-[#C2F800]"
                  : "text-[#9CA3AF] hover:text-white"
              }`}
            >
              Workout
            </button>
            <button
              onClick={handleNavigate("/my-plan")}
              className={`${linkBase} cursor-pointer ${
                isMyPlan
                  ? "bg-[#1A2312] text-[#C2F800]"
                  : "text-[#9CA3AF] hover:text-white"
              }`}
            >
              My Plan
            </button>
          </div>

          {/* -Right Status + Hamburger er jon --- */}
          <div className="flex items-center gap-4">
            {/* Plan */}
            <button
              onClick={handleNavigate("/my-plan")}
              className="hidden sm:flex items-center gap-2 text-sm text-white hover:text-[#C2F800] transition-colors cursor-pointer bg-transparent border-0"
            >
              <span>Plan</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[11px] font-bold text-black">
                {myPlan.length}
              </span>
            </button>

            {/* Saved badge */}
            <button
              onClick={handleNavigate("/my-plan")}
              className="hidden sm:flex items-center gap-2 text-sm text-white hover:text-[#C2F800] transition-colors cursor-pointer bg-transparent border-0"
            >
              <span>Saved</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#222630] bg-transparent text-[11px] font-bold text-white">
                {saved.length}
              </span>
            </button>

            {/* Hamburger —  */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#222630] text-white transition-colors hover:border-[#C2F800]/40 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>

        {/* --- Mobile Menu Dropdown -- */}
        {mobileOpen && (
          <div className="border-t border-[#222630] bg-[#0C0D10] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {/* Workouts */}
              <button
                onClick={handleNavigate("/")}
                className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isWorkouts
                    ? "bg-[#1A2312] text-[#C2F800]"
                    : "text-[#9CA3AF] hover:bg-[#15171D] hover:text-white"
                }`}
              >
                <span>Workouts</span>
                {isWorkouts && (
                  <span className="h-2 w-2 rounded-full bg-[#C2F800]" />
                )}
              </button>

              {/* My Plan */}
              <button
                onClick={handleNavigate("/my-plan")}
                className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isMyPlan
                    ? "bg-[#1A2312] text-[#C2F800]"
                    : "text-[#9CA3AF] hover:bg-[#15171D] hover:text-white"
                }`}
              >
                <span>My Plan</span>
                <div className="flex items-center gap-2">
                  <span className="flex h-5 items-center gap-1 rounded-full bg-[#C2F800] px-2 text-[11px] font-bold text-black">
                    {myPlan.length} Plan
                  </span>
                  <span className="flex h-5 items-center gap-1 rounded-full border border-[#222630] px-2 text-[11px] font-bold text-white">
                    {saved.length} Saved
                  </span>
                </div>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;