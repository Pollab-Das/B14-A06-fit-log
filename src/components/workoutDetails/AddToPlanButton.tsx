
"use client";

import { CalendarPlus, Check } from "lucide-react";
import { useWorkouts } from "@/context/WorkoutsContext";
import type { IWorkout } from "@/types/workouts.type";

const AddToPlanButton = ({ workout }: { workout: IWorkout }) => {
  const { addToPlan, removeFromPlan, isInPlan, isPlanFull } = useWorkouts();
  const active = isInPlan(workout.id);
  const full = isPlanFull();

  const handleClick = () => {
    if (active) {
      removeFromPlan(workout.id);
    } else {
      addToPlan(workout);
    }
  };

  // Disabled state — 
  const disabled = full && !active;

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
        active
          ? "border border-[#C2F800]/40 bg-transparent text-[#C2F800]"
          : disabled
          ? "cursor-not-allowed border border-[#222630] bg-[#15171D] text-[#9CA3AF]"
          : "bg-[#C2F800] text-black hover:bg-[#d4ff3d] hover:scale-[1.02]"
      }`}
    >
      {active ? (
        <>
          <Check className="h-4 w-4" strokeWidth={3} />
          Added to Plan
        </>
      ) : disabled ? (
        <>
          <CalendarPlus className="h-4 w-4" />
          Plan Full (5/5)
        </>
      ) : (
        <>
          <CalendarPlus className="h-4 w-4" />
          Add to today&apos;s plan
        </>
      )}
    </button>
  );
};

export default AddToPlanButton;