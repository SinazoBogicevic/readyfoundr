import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Idea Validation",
    description: "Validate your concept with a minimal viable product.",
  },
  {
    title: "Rapid Prototyping",
    description: "Quickly bring your idea to life.",
  },
  {
    title: "Scalable Solutions",
    description: "Build a foundation for future growth.",
  },
  {
    title: "Expert Guidance",
    description: "Benefit from our years of experience.",
  },
];

export function ServiceOverview() {
  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
        >
          The Offer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-center text-gray-300 mb-12"
        >
          Expert development for your startup idea.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start space-x-4 bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/10"
            >
              <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
