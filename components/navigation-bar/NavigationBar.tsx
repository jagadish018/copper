import Link from "next/link";
import React from "react";
import HonoSvg from "@/assets/svgs/hono.svg";
import Image from "next/image";

const NavigationBar = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <Image src={HonoSvg} alt="Hono" className="w-6 h-6" />
          <span className="text-2xl font-bold">Hono</span>
        </div>
        <div>
          <nav className="flex flex-row gap-8 items-center">
            <Link href="/docs">Docs</Link>
            <Link href="/examples">Examples</Link>
            <Link href="/discussion">Discussion</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
