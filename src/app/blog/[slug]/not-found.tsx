import { Header } from "@/app/components/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900">
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blog Post Not Found
            </h1>
            <p className="text-gray-300 mb-8">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/blog"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
