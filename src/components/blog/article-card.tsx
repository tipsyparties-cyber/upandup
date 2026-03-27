import Link from "next/link";

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
      <div className="h-full rounded-2xl border border-white/15 bg-white/8 backdrop-blur-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-white/12 transition-all duration-300 hover:-translate-y-1">
        <p className="font-sans text-xs text-white/40">{date} &middot; {readTime}</p>
        <h3 className="mt-3 font-display text-xl font-light leading-snug text-white">{title}</h3>
        <p className="mt-3 text-sm text-white/50 leading-relaxed">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white/70">
          Read article
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
