// src/components/homepage/Workouts.tsx
import WorkoutCard from "@/components/shared/WorkoutCard";
import { getAllWorkouts } from "@/lib/api";

const Workouts = async () => {
  const workouts = await getAllWorkouts();

  return (
    <section
      id="library"
      className="mx-auto max-w-[1280px] scroll-mt-24 px-4 py-12 md:py-16"
    >
      {/* ---------- Section Header ---------- */}
      <div className="mb-8 md:mb-10">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
          The Library
        </h2>
        <p className="mt-2 text-sm text-[#9CA3AF] md:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* ---------- Grid ---------- */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default Workouts;