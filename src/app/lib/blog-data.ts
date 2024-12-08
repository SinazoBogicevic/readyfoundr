import fs from "fs/promises";
import * as path from "path";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  content: string;
  imageSrc: string;
  readTime: string;
  categories: string[];
  meta: {
    author: string;
    ogImage: string;
    keywords: string[];
  };
}

const blogPostsData: Omit<BlogPost, "content">[] = [
  {
    id: "validation-over-refinement",
    title:
      "Validation Over Perfection: Why Your Startup Idea Needs Testing, Not Tweaking",
    description:
      "Learn why validating your idea is more important than perfecting your product...",
    date: "March 20, 2024",
    imageSrc: "/validation-diagram.png",
    readTime: "4 min read",
    categories: ["Startup", "Product Development", "Validation", "MVP"],
    meta: {
      author: "Ready Foundr",
      ogImage: "/blog/validation.jpg",
      keywords: [
        "startup validation",
        "MVP",
        "product development",
        "lean startup",
      ],
    },
  },
  {
    id: "zero-to-mvp",
    title: "From Zero to MVP: Building a Tech Startup Without Coding Skills",
    description:
      "Learn how to build your tech startup MVP without writing a single line of code...",
    date: "March 15, 2024",
    imageSrc: "/mvp-diagram.jpg",
    readTime: "5 min read",
    categories: ["Startup", "No-Code", "MVP"],
    meta: {
      author: "Ready Foundr",
      ogImage: "/blog/mvp.jpg",
      keywords: ["no-code", "MVP development", "startup tools", "tech startup"],
    },
  },
  {
    id: "bootstrap-without-tech",
    title: "How to Bootstrap Your Startup Without Technical Skills",
    description:
      "Learn how to start and grow your tech startup even without technical expertise...",
    date: "March 25, 2024",
    imageSrc: "/bootstrap-startup.jpg",
    readTime: "6 min read",
    categories: ["Startup", "No-Code", "Entrepreneurship", "Resources"],
    meta: {
      author: "Ready Foundr",
      ogImage: "/blog/bootstrap.jpg",
      keywords: [
        "startup bootstrapping",
        "non-technical founder",
        "no-code tools",
        "entrepreneurship",
        "startup resources",
      ],
    },
  },
  {
    id: "practical-validation-guide",
    title: "A Practical Guide to Validating Your Product Idea",
    description:
      "Learn how to effectively validate your product idea using social media platforms and direct customer engagement...",
    date: "March 28, 2024",
    imageSrc: "/validation-guide.png",
    readTime: "8 min read",
    categories: [
      "Validation",
      "Social Media",
      "Market Research",
      "Product Development",
    ],
    meta: {
      author: "Ready Foundr",
      ogImage: "/blog/validation-guide.jpg",
      keywords: [
        "product validation",
        "market research",
        "social media validation",
        "customer feedback",
        "startup validation",
      ],
    },
  },
];

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await Promise.all(
    blogPostsData.map(async (post) => {
      const content = await fs.readFile(
        path.join(process.cwd(), `src/app/content/blog/${post.id}.mdx`),
        "utf-8"
      );
      return { ...post, content };
    })
  );
  return posts;
}

export async function getBlogPost(id: string): Promise<BlogPost | undefined> {
  const post = blogPostsData.find((p) => p.id === id);
  if (!post) return undefined;

  const content = await fs.readFile(
    path.join(process.cwd(), `src/app/content/blog/${id}.mdx`),
    "utf-8"
  );
  return { ...post, content };
}
