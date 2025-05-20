import Link from "next/link";

import { siteConfig } from "@/config/site";
import { CommandMenu } from "@/components/command-menu";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeSwitcher } from "@/components/mode-switcher";
import { Button } from "@/registry/default/ui/button";

export function SiteHeader() {
  return (
    <header className='shawdowNav sticky top-0 z-50 w-full bg-[#0a0909] backdrop-blur '>
      <div className='container-wrapper'>
        <div className='container flex h-16 items-center gap-2 md:gap-4'>
          <MainNav />
          {/* <MobileNav /> */}
          <div className='ml-auto flex items-center gap-2 md:flex-1 md:justify-end'>
            <nav className='flex items-center gap-0.5'>
              <Button
                asChild
                variant='ghost'
                size='icon'
                className='h-8 w-8 px-0'
              >
                <Link
                  href={siteConfig.links.github}
                  target='_blank'
                  rel='noreferrer'
                >
                  <Icons.gitHub className='h-4 w-4' />
                  <span className='sr-only'>GitHub</span>
                </Link>
              </Button>
              <ModeSwitcher />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
