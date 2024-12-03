import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function TimelineAnimation({ steps }: { steps: string[] }) {
  const controls = useAnimation();

  // Container variants for overall animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Item variants for individual list items
  const itemVariants = {
    hidden: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Circle variants for numbering
  const circleVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  // Animation loop effect
  useEffect(() => {
    const animateList = async () => {
      while (true) {
        // Initial entrance
        await controls.start("visible");

        // Wait for a moment
        await new Promise((resolve) => setTimeout(resolve, 3000));

        // Exit animation
        await controls.start("exit");

        // Small pause before restarting
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    };

    animateList();
  }, [controls]);

  return (
    <motion.div
      className="relative pl-8"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400/20" />

      {steps.map((step, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="relative mb-8 last:mb-0"
        >
          <motion.div
            variants={circleVariants}
            className="absolute left-0 w-6 h-6 -translate-x-[10px] -translate-y-[4px]"
          >
            <div className="w-full h-full bg-blue-400 rounded-full flex items-center justify-center text-sm font-bold">
              {index + 1}
            </div>
          </motion.div>

          <motion.p
            className="text-blue-400 text-lg ml-6"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
              exit: { opacity: 0 },
            }}
          >
            {step}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
}
