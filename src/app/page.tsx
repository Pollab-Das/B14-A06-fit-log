
import { Suspense } from "react";
import Banner from "@/components/homepage/Banner";
import Workouts from "@/components/homepage/Workout";

const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center py-32">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#222630] border-t-[#C2F800]" />
    <p className="mt-4 text-sm font-medium text-[#9CA3AF]">
      Loading workouts...
    </p>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0C0D10]">
      <Banner />
      <Suspense fallback={<LoadingFallback />}>
        <Workouts />
      </Suspense>
    </div>
  );
}