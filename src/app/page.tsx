// src/app/page.tsx
import Banner from "@/components/homepage/Banner";
import Workouts from "@/components/homepage/Workout";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0C0D10]">
      <Banner />
      <Workouts />
    </div>
  );
}