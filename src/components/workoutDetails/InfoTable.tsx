
import type { IWorkout } from "@/types/workouts.type";

const InfoTable = ({ workout }: { workout: IWorkout }) => {
  const rows = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
  ];

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D]">
      {rows.map((row, idx) => (
        <div
          key={row.label}
          className={`flex items-center justify-between px-5 py-3.5 text-sm ${
            idx !== rows.length - 1 ? "border-b border-[#222630]" : ""
          }`}
        >
          <span className="font-medium uppercase tracking-wide text-[#9CA3AF] text-xs">
            {row.label}
          </span>
          <span className="font-semibold text-white">{row.value}</span>
        </div>
      ))}
    </div>
  );
};

export default InfoTable;