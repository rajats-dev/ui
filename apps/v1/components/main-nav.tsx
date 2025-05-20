"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className='mr-4 hidden md:flex font-bold text-xl'>
      <Link href='/' className='mr-4 flex items-center gap-2 lg:mr-6'>
        <Icons.logo className='h-6 w-6' />
        <span className='hidden font-bold lg:inline-block'>
          {siteConfig.name}
        </span>
      </Link>
      <nav className='flex items-center gap-4 text-sm xl:gap-6'>
        <Link
          href='/docs/installation'
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs/installation"
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Docs
        </Link>
        <Link
          href='/docs/components/accordion'
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components") &&
              !pathname?.startsWith("/docs/component/chart")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Components
        </Link>
      </nav>
    </div>
  );
}
