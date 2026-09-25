// src/components/homepage/WorkoutsList.tsx
"use client";

import { useEffect, useState } from "react";
import WorkoutCard from "@/components/shared/WorkoutCard";
import type { IWorkout } from "@/types/workouts.type";

const MIN_LOADING_TIME = 500;

const WorkoutsList = () => {
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const startTime = Date.now();

      try {
        setLoading(true);
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkouts(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {

        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, MIN_LOADING_TIME - elapsed);

        setTimeout(() => setLoading(false), remaining);
      }
    };

    fetchWorkouts();
  }, []);

if (loading) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D]"
        >
          <div className="aspect-[16/10] w-full animate-pulse bg-[#1a1d24]" />
          <div className="flex flex-col gap-3 p-4">
            <div className="h-5 w-16 animate-pulse rounded-full bg-[#1a1d24]" />
            <div className="h-5 w-3/4 animate-pulse rounded-md bg-[#1a1d24]" />
            <div className="h-3 w-1/2 animate-pulse rounded-md bg-[#1a1d24]" />
          </div>
        </div>
      ))}
    </div>
  );
}
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
};

export default WorkoutsList;