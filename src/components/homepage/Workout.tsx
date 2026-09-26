
import { promises as fs } from "fs";
import path from "path";
import WorkoutCard from "@/components/shared/WorkoutCard";
import type { IWorkout } from "@/types/workouts.type";


const getLocalWorkouts = async (): Promise<IWorkout[]> => {
  try {
    const filePath = path.join(process.cwd(), "public", "fitlog.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Local JSON error:", error);
    return [];
  }
};

// fallback
const getWorkouts = async (): Promise<IWorkout[]> => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`API status ${res.status} — using local fallback`);
      return await getLocalWorkouts();
    }

    return await res.json();
  } catch (error) {
    console.error("API fetch failed — using local fallback:", error);
    return await getLocalWorkouts();
  }
};

const Workouts = async () => {
  const workouts = await getWorkouts();

  if (workouts.length === 0) {
    return (
      <section
        id="library"
        className="mx-auto max-w-[1280px] scroll-mt-24 px-4 py-12 md:py-16"
      >
        <div className="mb-8 md:mb-10">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
            The Library
          </h2>
        </div>
        <div className="rounded-2xl border border-[#222630] bg-[#15171D] p-12 text-center">
          <p className="text-[#9CA3AF]">
            Unable to load workouts. Please refresh the page.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="library"
      className="mx-auto max-w-[1280px] scroll-mt-24 px-4 py-12 md:py-16"
    >
      <div className="mb-8 md:mb-10">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
          The Library
        </h2>
        <p className="mt-2 text-sm text-[#9CA3AF] md:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default Workouts;