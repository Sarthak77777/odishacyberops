import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { serialize } from "next-mdx-remote/serialize";

const blogPath = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
};

export function getBlogPosts(): BlogPost[] {
  return fs.readdirSync(blogPath).map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const source = fs.readFileSync(path.join(blogPath, filename), "utf8");
    const { data, content } = matter(source);
    return {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      date: String(data.date ?? "1970-01-01"),
      tags: (data.tags ?? []) as string[],
      content,
    };
  });
}

export function getBlogPost(slug: string): BlogPost | null {
  const filepath = path.join(blogPath, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return null;
  const source = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(source);
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? "1970-01-01"),
    tags: (data.tags ?? []) as string[],
    content,
  };
}

export async function renderBlogPost(content: string) {
  return await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
  });
}
