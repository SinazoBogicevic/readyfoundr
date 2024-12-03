import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Consultation",
    description:
      "We'll discuss your idea and project scope to determine if we're a good fit and if we can work together effectively.",
  },
  {
    number: 2,
    title: "Development",
    description:
      "We'll define the scope of the MVP and identify the specific features to be built. Remember, we're focusing on building a minimal viable product, not a full-fledged application.",
  },
  {
    number: 3,
    title: "Launch",
    description:
      "Once the MVP is complete, we'll deploy it and set up analytics to track user behavior. This data will be invaluable for gathering user feedback and making informed decisions about future development.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 bg-gradient-to-b from-indigo-900 via-blue-900 to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        >
          How It Works
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/10 p-6 text-center w-full md:w-1/3"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
