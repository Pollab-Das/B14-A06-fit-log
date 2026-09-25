// src/app/workouts/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import InfoTable from "@/components/workoutDetails/InfoTable";
import Instructions from "@/components/workoutDetails/Instructions";
import AddToPlanButton from "@/components/workoutDetails/AddToPlanButton";
import SaveButton from "@/components/workoutDetails/SaveButton";
import { getWorkoutById } from "@/lib/api";

interface IWorkoutDetailsPageProps {
  params: Promise<{ id: string }>;
}

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-[1280px] px-4 py-10 md:py-14">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
        {/* ---------- Left: Image ---------- */}
        <div className="relative aspect-[588/773] w-full overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* ---------- Right: Info ---------- */}
        <div className="flex flex-col">
          <h1 className="font-heading text-4xl font-bold uppercase leading-tight tracking-wide text-white md:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-3 text-base leading-relaxed text-[#9CA3AF]">
            {workout.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <InfoTable workout={workout} />
          <Instructions steps={workout.instructions} />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AddToPlanButton workout={workout} />
            <SaveButton workout={workout} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailsPage;