import Link from "next/link";
import { BookOpen } from "lucide-react";
import { getBlogPosts } from "@/lib/mdx";

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
      <div className="mb-8 flex items-center gap-4">
        <BookOpen className="h-6 w-6 text-cyan-300" />
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Research blog</p>
          <h1 className="text-3xl font-semibold text-white">Threat research and detection engineering</h1>
        </div>
      </div>
      <div className="space-y-5">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-3xl border border-slate-700/30 bg-slate-900/90 p-6 transition hover:border-cyan-400/30 hover:bg-slate-900/95">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
                <p className="mt-2 text-sm text-slate-400">{post.description}</p>
              </div>
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-300">{post.date}</span>
            </div>
            <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-medium text-cyan-300 hover:text-white">
              Read full analysis →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
