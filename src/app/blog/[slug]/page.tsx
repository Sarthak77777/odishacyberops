import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { getBlogPost, getBlogPosts, renderBlogPost } from "@/lib/mdx";

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Blog" };
  return {
    title: `${post.title} | ODISACYBEROPS.IN`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) {
    return <div className="text-slate-200">Post not found</div>;
  }
  const source = await renderBlogPost(post.content);

  return (
    <article className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Research blog</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">{post.title}</h1>
        <p className="mt-3 text-sm text-slate-400">{post.description}</p>
      </div>
      <div className="prose prose-invert max-w-none text-slate-200 prose-a:text-cyan-300 prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300">
        <MDXRemote source={source} />
      </div>
    </article>
  );
}
