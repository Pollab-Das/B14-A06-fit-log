
"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { IWorkout } from "@/types/workouts.type";

const PLAN_CAP = 5;

interface IWorkoutsContext {
  myPlan: IWorkout[];
  saved: IWorkout[];
  completedIds: number[];

  addToPlan: (workout: IWorkout) => void;
  removeFromPlan: (id: number) => void;
  addToSaved: (workout: IWorkout) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
  clearPlan: () => void;

  isInPlan: (id: number) => boolean;
  isInSaved: (id: number) => boolean;
  isCompleted: (id: number) => boolean;
  isPlanFull: () => boolean;
  planCount: number;
}

export const WorkoutsContext = createContext<IWorkoutsContext>({
  myPlan: [],
  saved: [],
  completedIds: [],
  addToPlan: () => {},
  removeFromPlan: () => {},
  addToSaved: () => {},
  removeFromSaved: () => {},
  markAsDone: () => {},
  clearPlan: () => {},
  isInPlan: () => false,
  isInSaved: () => false,
  isCompleted: () => false,
  isPlanFull: () => false,
  planCount: 0,
});

const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  const [myPlan, setMyPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);
  const [completedIds, setCompletedIds] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // ---- localStorage ---
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog_plan");
      const storedSaved = localStorage.getItem("fitlog_saved");
      const storedDone = localStorage.getItem("fitlog_done");

      if (storedPlan) setMyPlan(JSON.parse(storedPlan));
      if (storedSaved) setSaved(JSON.parse(storedSaved));
      if (storedDone) setCompletedIds(JSON.parse(storedDone));
    } catch (error) {
      console.error("Failed to load from localStorage:", error);
    } finally {
      setHydrated(true);
    }
  }, []);

  // --- localStorage ---
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("fitlog_plan", JSON.stringify(myPlan));
  }, [myPlan, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("fitlog_saved", JSON.stringify(saved));
  }, [saved, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("fitlog_done", JSON.stringify(completedIds));
  }, [completedIds, hydrated]);

  // --- My Plan ---
  const addToPlan = (workout: IWorkout) => {
    if (myPlan.some((w) => w.id === workout.id)) {
      toast.info("Already in today's plan");
      return;
    }
    if (myPlan.length >= PLAN_CAP) {
      toast.error("Plan is full (max 5 lifts). Remove one first.");
      return;
    }
    setMyPlan((prev) => [...prev, workout]);
    toast.success("Added to today's plan");
  };

  const removeFromPlan = (id: number) => {
    setMyPlan((prev) => prev.filter((w) => w.id !== id));
    setCompletedIds((prev) => prev.filter((cid) => cid !== id));
    toast.success("Removed from today's plan");
  };

  const clearPlan = () => {
    setMyPlan([]);
    setCompletedIds([]);
    toast.success("Plan cleared");
  };

  // --- Saved ----
  const addToSaved = (workout: IWorkout) => {
    if (saved.some((w) => w.id === workout.id)) {
      toast.info("Already saved");
      return;
    }
    setSaved((prev) => [...prev, workout]);
    toast.success("Saved for later");
  };

  const removeFromSaved = (id: number) => {
    setSaved((prev) => prev.filter((w) => w.id !== id));
    toast.success("Removed from saved");
  };

  // --- Mark as Done ----
  const markAsDone = (id: number) => {
  const isDone = completedIds.includes(id);

  // Toast call 
  if (isDone) {
    toast.info("Marked as not done");
    setCompletedIds((prev) => prev.filter((cid) => cid !== id));
  } else {
    toast.success("Marked as done");
    setCompletedIds((prev) => [...prev, id]);
  }
};

  // ---- Helpers ----
  const isInPlan = (id: number) => myPlan.some((w) => w.id === id);
  const isInSaved = (id: number) => saved.some((w) => w.id === id);
  const isCompleted = (id: number) => completedIds.includes(id);
  const isPlanFull = () => myPlan.length >= PLAN_CAP;

  return (
    <WorkoutsContext.Provider
      value={{
        myPlan,
        saved,
        completedIds,
        addToPlan,
        removeFromPlan,
        addToSaved,
        removeFromSaved,
        markAsDone,
        clearPlan,
        isInPlan,
        isInSaved,
        isCompleted,
        isPlanFull,
        planCount: myPlan.length,
      }}
    >
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;

export const useWorkouts = () => useContext(WorkoutsContext);