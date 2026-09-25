// src/app/workouts/[id]/loading.tsx
const WorkoutDetailsLoading = () => {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-10 md:py-14">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: image skeleton */}
        <div className="aspect-square w-full animate-pulse rounded-2xl border border-[#222630] bg-[#15171D]" />

        {/* Right: info skeleton */}
        <div className="flex flex-col gap-4">
          <div className="h-12 w-3/4 animate-pulse rounded-md bg-[#15171D]" />
          <div className="h-4 w-full animate-pulse rounded-md bg-[#15171D]" />
          <div className="h-4 w-5/6 animate-pulse rounded-md bg-[#15171D]" />

          <div className="mt-3 flex gap-2">
            <div className="h-6 w-20 animate-pulse rounded-full bg-[#15171D]" />
            <div className="h-6 w-16 animate-pulse rounded-full bg-[#15171D]" />
          </div>

          <div className="mt-4 h-64 w-full animate-pulse rounded-2xl bg-[#15171D]" />

          <div className="mt-4 flex gap-3">
            <div className="h-12 flex-1 animate-pulse rounded-lg bg-[#15171D]" />
            <div className="h-12 flex-1 animate-pulse rounded-lg bg-[#15171D]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailsLoading;