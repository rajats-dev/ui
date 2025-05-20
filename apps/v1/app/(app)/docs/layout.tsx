import { DocsNav } from "@/components/docs-nav";
import { docsConfig } from "@/config/docs";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='container-wrapper'>
      <div className='container flex-1 items-start md:grid md:grid-cols-[260px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-10'>
        <aside className='shawdow bg-primary-foreground fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-2 my-5 rounded-xl md:sticky md:block'>
          <div className='no-scrollbar h-full overflow-auto p-4 lg:py-8'>
            <DocsNav config={docsConfig} />
          </div>
        </aside>
        {children}
      </div>
    </div>
  );
}
