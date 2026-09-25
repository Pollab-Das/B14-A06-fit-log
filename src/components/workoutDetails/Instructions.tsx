// src/components/workoutDetails/Instructions.tsx
const Instructions = ({ steps }: { steps: string[] }) => {
  return (
    <div className="mt-8">
      <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
        Instructions
      </h3>
      <ol className="mt-4 space-y-3">
        {steps.map((step, idx) => (
          <li key={idx} className="flex gap-3 text-sm leading-relaxed text-[#9CA3AF]">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1A2312] text-xs font-bold text-[#C2F800]">
              {idx + 1}
            </span>
            <span className="pt-0.5">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;