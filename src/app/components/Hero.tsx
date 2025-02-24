"use client";
interface HeroProps {
  onOpenWaitlist: () => void;
}

export function Hero({ onOpenWaitlist }: HeroProps) {
  const title = "Learn How to Sell Your Product";
  const description =
    "I help founders turn ideas into revenue with practical sales strategies, validation techniques, and proven customer acquisition methods. Stop building in the dark - learn how to validate and sell your product effectively.";
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900">
      {/* <div className="absolute inset-0 opacity-50 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]" /> */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-indigo-900 via-blue-900/50 to-transparent" />

      <div className="container mx-auto px-4 text-center z-10 max-w-3xl">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">{title}</h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <button
              onClick={() => {
                onOpenWaitlist();
              }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full text-lg font-semibold transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              Get started
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
