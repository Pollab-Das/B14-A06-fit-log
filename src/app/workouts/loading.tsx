
const WorkoutsLoading = () => {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-10 md:py-14">
      {/* Header */}
      <div className="mb-8 md:mb-10">
        <div className="h-10 w-64 animate-pulse rounded-md bg-[#15171D]" />
        <div className="mt-3 h-4 w-96 animate-pulse rounded-md bg-[#15171D]" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D]"
          >
            {/* Image */}
            <div className="aspect-[16/10] w-full animate-pulse bg-[#1a1d24]" />

            {/* Content */}
            <div className="flex flex-col gap-3 p-4">
              <div className="flex gap-1.5">
                <div className="h-5 w-16 animate-pulse rounded-full bg-[#1a1d24]" />
                <div className="h-5 w-14 animate-pulse rounded-full bg-[#1a1d24]" />
              </div>
              <div className="h-5 w-3/4 animate-pulse rounded-md bg-[#1a1d24]" />
              <div className="h-3 w-1/2 animate-pulse rounded-md bg-[#1a1d24]" />
              <div className="mt-3 h-4 w-full animate-pulse rounded-md bg-[#1a1d24]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkoutsLoading;