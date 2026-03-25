import Link from "next/link";
import { NeoCard } from "@/components/ui/neo-card";

interface ArticleCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

export function ArticleCard({ slug, title, description, date, readTime }: ArticleCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <NeoCard className="h-full">
        <p className="font-sans text-xs text-mid-grey">{date} &middot; {readTime}</p>
        <h3 className="mt-3 font-serif text-xl font-light leading-snug">{title}</h3>
        <p className="mt-3 text-sm text-mid-grey leading-relaxed">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
          Read article
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </NeoCard>
    </Link>
  );
}
