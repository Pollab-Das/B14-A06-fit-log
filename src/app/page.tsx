// src/app/page.tsx
import { Suspense } from "react";
import Banner from "@/components/homepage/Banner";
import Workouts from "@/components/homepage/Workouts";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0C0D10]">
      <Banner />

      <Suspense
        fallback={
          <div className="flex items-center justify-center py-24">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#222630] border-t-[#C2F800]" />
          </div>
        }
      >
        <Workouts />
      </Suspense>
    </div>
  );
}