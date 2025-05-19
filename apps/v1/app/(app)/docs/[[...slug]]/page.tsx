import { notFound } from "next/navigation";
import { allDocs } from "contentlayer/generated";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import { Mdx } from "@/components/mdx-components";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const slug = (await params).slug?.join("/") || "";

  console.log(slug);
  console.log(allDocs);
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    notFound();
  }

  // const toc = await getTableOfContents(doc.body.raw);

  return (
    <main className='relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]'>
      <div className='mx-auto w-full min-w-0 max-w-2xl'>
        <div className='mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground'>
          <Link href='/docs' className='truncate'>
            Docs
          </Link>
          <ChevronRight className='h-3.5 w-3.5' />
          <div className='text-foreground'>{doc.title}</div>
        </div>
        <div className='space-y-2'>
          <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className='text-base text-muted-foreground'>
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        {doc.links ? (
          <div className='flex items-center space-x-2 pt-4'>
            {doc.links?.doc && (
              <Link
                href={doc.links.doc}
                target='_blank'
                rel='noreferrer'
                // className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                Docs
                <ExternalLink className='h-3 w-3' />
              </Link>
            )}
            {doc.links?.api && (
              <Link
                href={doc.links.api}
                target='_blank'
                rel='noreferrer'
                // className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                API Reference
                <ExternalLink className='h-3 w-3' />
              </Link>
            )}
          </div>
        ) : null}
        <div className='pb-12 pt-8'>
          <Mdx code={doc.body.code} />
        </div>
        {/* <DocsPager doc={doc} /> */}
      </div>
      {/* <div className='hidden text-sm xl:block'>
        <div className='sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4'>
          <div className='no-scrollbar h-full overflow-auto pb-10'>
            {doc.toc && <DashboardTableOfContents toc={toc} />}
            <OpenInV0Cta className='mt-6 max-w-[80%]' />
          </div>
        </div>
      </div> */}
    </main>
  );
}
