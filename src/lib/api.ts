// src/lib/api.ts
import type { IWorkout } from "@/types/workouts.type";

const API_BASE = "https://api.abcz.workers.dev/api/fitlog";

export const getAllWorkouts = async (): Promise<IWorkout[]> => {
  try {
    const res = await fetch(API_BASE, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed: ${res.status}`);
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return [];
  }
};

export const getWorkoutById = async (
  id: string | number
): Promise<IWorkout | null> => {
  try {
    const res = await fetch(`${API_BASE}/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed: ${res.status}`);
    const data = await res.json();
    return data ?? null;
  } catch (error) {
    console.error(`Error fetching workout ${id}:`, error);
    return null;
  }
};