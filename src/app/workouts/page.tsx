
import WorkoutCard from "@/components/shared/WorkoutCard";
import { getAllWorkouts } from "@/lib/api";

const WorkoutsPage = async () => {
  const workouts = await getAllWorkouts();

  return (
    <section className="mx-auto max-w-[1280px] px-4 py-10 md:py-14">
      {/* --- Page Header --- */}
      <div className="mb-8 md:mb-10">
        <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-white md:text-5xl">
          All Workouts
        </h1>
        <p className="mt-2 text-sm text-[#9CA3AF] md:text-base">
          Twelve lifts covering every major muscle group. Pick a lift to see
          details.
        </p>
      </div>

      {/* --- Grid --- */}
      {workouts.length === 0 ? (
        <div className="rounded-2xl border border-[#222630] bg-[#15171D] p-12 text-center">
          <p className="text-[#9CA3AF]">No workouts available.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </section>
  );
};

export default WorkoutsPage;