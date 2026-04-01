import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1fr_0.8fr_0.8fr] lg:px-12 lg:py-12">
        <div>
          <p className="font-serif text-3xl italic tracking-[-0.04em]">
            Maestro Built Constructions
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
            Premium construction for custom homes, renovations, extensions, and commercial spaces.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-white/70">Navigation</p>
          <nav className="mt-4 flex flex-col gap-3 text-sm text-white/85">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-opacity hover:opacity-60">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-white/70">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-white/85">
            <p>hello@maestrobuilt.com</p>
            <p>+61 400 000 000</p>
            <p>Sydney and surrounding regions</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 text-xs uppercase tracking-[0.22em] text-white/70 sm:px-8 lg:px-12">
          <p>© 2026 Maestro Built Constructions</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
