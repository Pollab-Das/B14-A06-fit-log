// src/components/myPlan/StatsBar.tsx
"use client";

import type { IWorkout } from "@/types/workouts.type";

interface StatsBarProps {
  workouts: IWorkout[];
}

const StatsBar = ({ workouts }: StatsBarProps) => {
  const totalExercises = workouts.length;
  const totalMinutes = workouts.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = workouts.reduce(
    (sum, w) => sum + w.caloriesBurned,
    0
  );

  const stats = [
    { label: "Exercises", value: totalExercises, accent: true },
    { label: "Minutes", value: totalMinutes, accent: false },
    { label: "Calories", value: totalCalories, accent: false },
  ];

  return (
    <div className="grid grid-cols-3 divide-x divide-[#222630] overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D]">
      {stats.map((stat) => (
        <div key={stat.label} className="px-6 py-6 md:px-8 md:py-8">
          <p className="text-xs uppercase tracking-wide text-[#9CA3AF] md:text-sm">
            {stat.label}
          </p>
          <p
            className={`mt-2 font-heading text-4xl font-bold md:text-5xl ${
              stat.accent ? "text-[#C2F800]" : "text-white"
            }`}
          >
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;