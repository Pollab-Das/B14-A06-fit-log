// src/components/myPlan/EmptyState.tsx
import Link from "next/link";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-[#222630] bg-[#15171D] px-6 py-16 text-center">
      <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-white">
        Nothing Here Yet
      </h3>
      <p className="mt-3 max-w-md text-sm text-[#9CA3AF]">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#C2F800] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-all duration-200 hover:bg-[#d4ff3d] hover:scale-[1.02]"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default EmptyState;