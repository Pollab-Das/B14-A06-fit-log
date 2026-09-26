
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#222630] bg-[#0C0D10]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        {/* Logo */}
<div className="flex items-center gap-2">
  <Image
    src={logo}
    alt="FitLog"
    width={24}
    height={24}
    className="h-6 w-6 object-contain "
    
  />
  <span className="font-heading text-xl font-bold tracking-wide text-white">
    FITLOG
  </span>
</div>

        {/* Copyright */}
        <p className="text-sm text-[#9CA3AF]">
  © 2026 FitLog — Workout Library. Train hard, log honest.
</p>
      </div>
    </footer>
  );
};

export default Footer;