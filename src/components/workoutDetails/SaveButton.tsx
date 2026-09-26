
"use client";

import { Bookmark, BookmarkCheck } from "lucide-react";
import { useWorkouts } from "@/context/WorkoutsContext";
import type { IWorkout } from "@/types/workouts.type";

const SaveButton = ({ workout }: { workout: IWorkout }) => {
  const { addToSaved, removeFromSaved, isInSaved } = useWorkouts();
  const active = isInSaved(workout.id);

  const handleClick = () => {
    if (active) {
      removeFromSaved(workout.id);
    } else {
      addToSaved(workout);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-5 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
        active
          ? "border-[#C2F800] bg-[#1A2312] text-[#C2F800]"
          : "border-[#222630] bg-transparent text-white hover:border-[#C2F800]/40 hover:text-[#C2F800]"
      }`}
    >
      {active ? (
        <>
          <BookmarkCheck className="h-4 w-4" />
          Saved
        </>
      ) : (
        <>
          <Bookmark className="h-4 w-4" />
          Save for later
        </>
      )}
    </button>
  );
};

export default SaveButton;