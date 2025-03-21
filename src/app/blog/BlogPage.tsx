"use client";

import { Header } from "@/app/components/Header";
import { BlogPost } from "@/app/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/blog");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900">
        <div className="pt-32 pb-20">
          <div id="blog" className=" container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Blog
            </h1>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="block bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10 hover:border-blue-400/50 transition-colors"
                >
                  <div className="aspect-video bg-blue-900/50">
                    <Image
                      src={post.imageSrc}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-blue-400 text-sm mb-2">{post.date}</p>
                    <h2 className="text-xl font-semibold text-white mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-4">{post.description}</p>
                    <span className="text-blue-400 hover:text-blue-300 transition-colors">
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
