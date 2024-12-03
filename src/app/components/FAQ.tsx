"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is an MVP?",
    answer:
      "An MVP (Minimum Viable Product) is a basic version of your product with just enough features to satisfy early customers and provide feedback for future development.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer:
      "The timeline for building an MVP can vary depending on the complexity of your project. Typically, it can take anywhere from 4 to 12 weeks.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The cost of building an MVP depends on various factors such as features, complexity, and timeline. Prices start at $5,000 and max out at $10,000. I never go over budget.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use a variety of modern technologies depending on your project needs. This may include React, Node.js, Python, and various cloud services.",
  },
  {
    question: "What happens after the MVP is delivered?",
    answer:
      "After delivering your MVP, we can help you gather and analyze user feedback, make improvements, and plan for future iterations of your product.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-lg overflow-hidden bg-white/10 backdrop-blur-lg"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
