"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-950/10 bg-stone-50/95 backdrop-blur-sm">
      <div className="mx-auto flex min-h-[4.5rem] w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="block max-w-[16rem] sm:max-w-none text-stone-950">
          <span className="block font-serif text-xl italic leading-none tracking-[-0.04em] sm:text-2xl">
            Maestro Built
          </span>
          <span className="mt-1.5 block text-[0.72rem] font-medium uppercase leading-none tracking-[0.32em] text-stone-900 sm:text-[0.78rem]">
            Constructions
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-opacity hover:opacity-60",
                  active ? "text-stone-950" : "text-stone-600",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex items-center gap-3 text-sm text-stone-950 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span>Menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-px w-5 bg-stone-950" />
            <span className="block h-px w-5 bg-stone-950" />
            <span className="block h-px w-5 bg-stone-950" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-stone-950/10 bg-stone-50 md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-6 py-4 sm:px-8">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "border-b border-stone-950/10 py-4 text-base",
                    active ? "text-stone-950" : "text-stone-600",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
