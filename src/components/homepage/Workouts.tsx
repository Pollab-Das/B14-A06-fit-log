// src/components/homepage/Workouts.tsx
import WorkoutsList from "./WorkoutsList";

const Workouts = () => {
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

      {/* ✅ Client component with loading state */}
      <WorkoutsList />
    </section>
  );
};

export default Workouts;