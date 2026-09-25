// src/app/not-found.tsx
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-heading text-7xl font-bold uppercase tracking-tight text-[#C2F800] md:text-9xl">
          404
        </h1>
        <p className="mt-4 text-lg uppercase tracking-wider text-white md:text-xl">
          This page could not be found
        </p>
        <p className="mt-2 text-sm text-[#9CA3AF]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#C2F800] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-all duration-200 hover:bg-[#d4ff3d] hover:scale-[1.02]"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}