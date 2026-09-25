// src/components/myPlan/PlanRow.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Clock, Flame, Star, X } from "lucide-react";
import { useWorkouts } from "@/context/WorkoutsContext";
import type { IWorkout } from "@/types/workouts.type";

interface PlanRowProps {
  workout: IWorkout;
  variant: "plan" | "saved";
}

const PlanRow = ({ workout, variant }: PlanRowProps) => {
  const { markAsDone, removeFromPlan, removeFromSaved, isCompleted } =
    useWorkouts();

  const done = isCompleted(workout.id);

  const handleRemove = () => {
    if (variant === "plan") removeFromPlan(workout.id);
    else removeFromSaved(workout.id);
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#222630] bg-[#15171D] p-4 sm:flex-row sm:items-center">
      {/* Thumbnail */}
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-[#222630] bg-[#0C0D10] sm:h-20 sm:w-20">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3
          className={`font-heading text-base font-bold uppercase tracking-wide sm:text-lg ${
            done ? "text-[#9CA3AF] line-through" : "text-white"
          }`}
        >
          {workout.name}
        </h3>
        <p className="mt-0.5 text-xs text-[#9CA3AF]">{workout.equipment}</p>

        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#9CA3AF]">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame className="h-3.5 w-3.5" />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5" />
            {workout.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-lg border border-[#222630] px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:border-[#C2F800]/40 hover:text-[#C2F800]"
        >
          View Details
        </Link>

        {variant === "plan" && (
          <button
            onClick={() => markAsDone(workout.id)}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
              done
                ? "border border-[#C2F800]/40 bg-transparent text-[#C2F800]"
                : "bg-[#C2F800] text-black hover:bg-[#d4ff3d]"
            }`}
          >
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
            {done ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          onClick={handleRemove}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#222630] text-[#9CA3AF] transition-colors hover:border-red-500/40 hover:text-red-400"
          aria-label="Remove"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PlanRow;