
import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import type { IWorkout } from "@/types/workouts.type";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D] transition-all duration-200 hover:border-[#C2F800]/40 hover:-translate-y-0.5"
    >
      {/*--- Image ---*/}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0C0D10]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/*--- Content ----*/}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/*--- Muscle Badges ---*/}
        <div className="flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#C2F800] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        
        <div>
          <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
            {workout.name}
          </h3>
          <p className="mt-0.5 text-xs text-[#9CA3AF]">{workout.equipment}</p>
        </div>

        
        <div className="mt-auto flex items-center gap-4 border-t border-[#222630] pt-3 text-xs text-[#9CA3AF]">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame className="h-3.5 w-3.5" />
            {workout.caloriesBurned} cal
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5" />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;