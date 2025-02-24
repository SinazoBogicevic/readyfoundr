import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { ShareButtons } from "@/app/components/ShareButtons";
import { getBlogPost, getBlogPosts } from "@/app/lib/blog-data";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface MDXProps {
  className?: string;
  alt?: string;
  src?: string;
  href?: string;
  children?: React.ReactNode;
  target?: string;
}

interface MDXChild {
  type: string;
  props: {
    src?: string;
    alt?: string;
    className?: string;
    children?: React.ReactNode;
  };
}

const BlogMeta = ({ readTime, date }: { readTime: string; date: string }) => (
  <div className="flex items-center gap-4 text-sm text-blue-400 mb-4">
    <p>{date}</p>
    <span className="w-1 h-1 rounded-full bg-blue-400" />
    <p>{readTime}</p>
  </div>
);

const CategoryTags = ({ categories }: { categories: string[] }) => (
  <div className="mt-12 pt-8 border-t border-white/10">
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <span
          key={category}
          className="px-3 py-1 rounded-full bg-blue-400/10 text-blue-400 text-sm"
        >
          {category}
        </span>
      ))}
    </div>
  </div>
);

const mdxComponents = {
  h1: (props: MDXProps) => (
    <h1 {...props} className="text-4xl font-bold text-white mb-8 mt-12" />
  ),
  h2: (props: MDXProps) => (
    <h2 {...props} className="text-3xl font-bold text-white mb-6 mt-10" />
  ),
  h3: (props: MDXProps) => (
    <h3 {...props} className="text-2xl font-semibold text-white mb-4 mt-8" />
  ),
  p: (props: MDXProps) => {
    if (
      props.children &&
      typeof props.children === "object" &&
      (props.children as MDXChild).type === "img"
    ) {
      return props.children;
    }
    return <p {...props} className="text-gray-300 leading-relaxed mb-6" />;
  },
  ul: (props: MDXProps) => (
    <ul {...props} className="list-disc pl-6 mb-6 space-y-2" />
  ),
  li: (props: MDXProps) => <li {...props} className="text-gray-300" />,
  strong: (props: MDXProps) => (
    <strong {...props} className="text-blue-400 font-semibold" />
  ),
  img: (props: MDXProps) => {
    if (!props.src) return null;

    return (
      <figure className="my-8 rounded-lg overflow-hidden">
        <Image
          src={props.src}
          width={800}
          height={400}
          className="w-full h-auto"
          alt={props.alt || "Blog post image"}
          priority={true}
        />
      </figure>
    );
  },
  a: (props: MDXProps) => (
    <a
      {...props}
      className="text-blue-400 hover:text-blue-300 underline cursor-pointer transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  ),
};

type Params = { slug: string };

interface Props {
  params: Promise<Params>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  const headersList = headers();
  const domain = (await headersList).get("host") || "readyfoundr.com";
  const canonicalUrl = `https://${domain}/blog/${post.id}`;

  return {
    title: `${post.title} | Ready Foundr`,
    description: post.description,
    authors: [{ name: post.meta.author }],
    keywords: post.meta.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.date,
      authors: [post.meta.author],
      images: [
        {
          url: post.meta.ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.meta.ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  const allPosts = await getBlogPosts();
  const recommendedPosts = allPosts.filter((p) => p.id !== slug).slice(0, 3);

  if (!post) {
    notFound();
  }

  const headersList = headers();
  const domain = (await headersList).get("host") || "readyfoundr.com";
  const postUrl = `https://${domain}/blog/${post.id}`;

  return (
    <main className="min-h-screen">
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900">
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-8 max-w-6xl mx-auto">
              {/* Main Content */}
              <div>
                <div className="mb-8">
                  <Breadcrumbs
                    items={[
                      { label: "Home", href: "/" },
                      { label: "Blog", href: "/blog" },
                      { label: post.title },
                    ]}
                  />
                </div>
                <article className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10 p-8 md:p-12">
                  <div className="aspect-video bg-blue-900/50 rounded-lg mb-8">
                    <Image
                      src={post.imageSrc}
                      width={800}
                      height={400}
                      className="w-full h-auto"
                      alt="Blog post image"
                    />
                  </div>
                  <BlogMeta readTime={post.readTime} date={post.date} />
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    {post.title}
                  </h1>
                  <div className="prose prose-invert prose-blue max-w-none">
                    <MDXRemote
                      source={post.content}
                      components={mdxComponents}
                    />
                  </div>
                  <CategoryTags categories={post.categories} />
                  <ShareButtons url={postUrl} title={post.title} />
                </article>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/10 p-6 sticky top-32">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Recommended Posts
                  </h2>
                  <div className="space-y-4">
                    {recommendedPosts.map((recommendedPost) => (
                      <Link
                        key={recommendedPost.id}
                        href={`/blog/${recommendedPost.id}`}
                        className="block group"
                      >
                        <Image
                          src={recommendedPost.imageSrc}
                          alt={recommendedPost.title}
                          width={800}
                          height={400}
                          className="w-full h-auto aspect-video bg-blue-900/50 rounded-lg mb-2"
                        />
                        <p className="text-blue-400 text-sm mb-1">
                          {recommendedPost.date}
                        </p>
                        <h3 className="text-white group-hover:text-blue-400 transition-colors">
                          {recommendedPost.title}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
