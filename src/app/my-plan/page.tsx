// src/app/my-plan/page.tsx
"use client";

import { useMemo, useState } from "react";
import StatsBar from "@/components/myPlan/StatsBar";
import PlanRow from "@/components/myPlan/PlanRow";
import EmptyState from "@/components/myPlan/EmptyState";
import SortDropdown, { SortOption } from "@/components/myPlan/SortDropdown";
import { useWorkouts } from "@/context/WorkoutsContext";

const MyPlanPage = () => {
  const { myPlan, saved } = useWorkouts();
  const [tab, setTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<SortOption>("Duration");

  const currentList = tab === "plan" ? myPlan : saved;

  const sortedList = useMemo(() => {
    const arr = [...currentList];
    switch (sortBy) {
      case "Duration":
        return arr.sort((a, b) => a.duration - b.duration);
      case "Calories":
        return arr.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
      case "Rating":
        return arr.sort((a, b) => b.rating - a.rating);
      default:
        return arr;
    }
  }, [currentList, sortBy]);

  return (
    <section className="mx-auto max-w-[1280px] px-4 py-10 md:py-14">
      {/* Header */}
      <div className="mb-8 md:mb-10">
        <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-white md:text-5xl">
          My Plan
        </h1>
        <p className="mt-2 text-sm text-[#9CA3AF] md:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* ---------- Stats Bar — current tab-এর list use করে ---------- */}
      <div className="mb-8">
        <StatsBar workouts={currentList} />
      </div>

      {/* Tabs + Sort */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="inline-flex rounded-lg border border-[#222630] bg-[#15171D] p-1">
          <button
            onClick={() => setTab("plan")}
            className={`rounded-md px-4 py-1.5 text-xs font-semibold transition-colors md:text-sm ${
              tab === "plan"
                ? "bg-[#1A2312] text-[#C2F800]"
                : "text-[#9CA3AF] hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            onClick={() => setTab("saved")}
            className={`rounded-md px-4 py-1.5 text-xs font-semibold transition-colors md:text-sm ${
              tab === "saved"
                ? "bg-[#1A2312] text-[#C2F800]"
                : "text-[#9CA3AF] hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      {/* List */}
      {sortedList.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-3">
          {sortedList.map((workout) => (
            <PlanRow key={workout.id} workout={workout} variant={tab} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MyPlanPage;