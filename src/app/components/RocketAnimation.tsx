"use client";

import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const steps = [
  "Identify the target audience",
  "Study the market and competitors",
  "Determine the core features",
  "Choose a business model",
  "Build a product roadmap",
  "Promote your product before launch",
  "Deploy the MVP to incorporate feedback",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const circleVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function RocketAnimation() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animationStage, setAnimationStage] = useState<
    "idle" | "launching" | "disappeared" | "reappearing"
  >("idle");

  useEffect(() => {
    if (isInView) {
      const animateSteps = async () => {
        // Start the steps animation
        await controls.start("visible");

        // Wait a moment after all steps are visible
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Launch the rocket
        setAnimationStage("launching");

        // Wait for launch animation to complete
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Disappear the rocket
        setAnimationStage("disappeared");

        // Wait before reappearing
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Reappear the rocket
        setAnimationStage("reappearing");

        // Wait for reappear animation to complete
        await new Promise((resolve) => setTimeout(resolve, 1500));
      };

      animateSteps();
    }
  }, [controls, isInView]);

  return (
    <div 
      ref={ref}
      className="relative min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-gray-900 flex items-center justify-center p-4"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          How to build a
          <br />
          <span className="text-blue-400">SaaS MVP</span> in 7 steps
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Rocket Animation */}
          <div className="relative">
            <motion.div
              initial={{ y: 0 }}
              animate={
                animationStage === "launching"
                  ? {
                      y: -800,
                      rotate: -45,
                      opacity: 1,
                      transition: {
                        duration: 1.5,
                        ease: "easeIn",
                      },
                    }
                  : animationStage === "disappeared"
                  ? {
                      y: -800,
                      rotate: -45,
                      opacity: 0,
                      transition: {
                        duration: 0.5,
                      },
                    }
                  : animationStage === "reappearing"
                  ? {
                      y: 0,
                      rotate: 0,
                      opacity: 1,
                      transition: {
                        duration: 1.5,
                        ease: "easeOut",
                      },
                    }
                  : {
                      y: [-20, 20, -20],
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
              className="relative z-10"
            >
              <svg
                height="200px"
                width="200px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    style={{ fill: "#F9D026" }}
                    d="M171.181,340.819c-52.5-52.5-118.497,43.543-118.497,43.543l24.597-7.532l-53.691,63.3l35.351-9.502 L0,511.999l81.371-58.94l-9.502,35.35l63.299-53.691l-7.532,24.597C127.637,459.316,223.681,393.319,171.181,340.819z"
                  ></path>{" "}
                  <path
                    style={{ fill: "#E7C224" }}
                    d="M171.181,340.819L0,511.999l81.371-58.94l-9.502,35.35l63.299-53.691l-7.532,24.597 C127.637,459.316,223.681,393.319,171.181,340.819z"
                  ></path>{" "}
                  <polygon
                    style={{ fill: "#F74D37" }}
                    points="183.216,222.837 53.806,201.025 121.794,133.038 251.204,154.849 "
                  ></polygon>{" "}
                  <polygon
                    style={{ fill: "#C43D2C" }}
                    points="289.163,328.785 310.975,458.195 378.963,390.207 357.151,260.798 "
                  ></polygon>{" "}
                  <path
                    style={{ fill: "#EDEEF0" }}
                    d="M465.429,159.887C508.154,86.257,512,0.005,512,0.002c0,0-86.254,3.843-159.885,46.57 c-16.993,9.862-33.312,21.791-47.746,36.225c0,0-135.974,135.974-160.266,160.266c-24.293,24.293-24.9,68.627,15.655,109.182 c40.555,40.555,84.888,39.947,109.182,15.655c24.292-24.292,160.266-160.266,160.266-160.266 C443.638,193.199,455.569,176.88,465.429,159.887z"
                  ></path>{" "}
                  <path
                    style={{ fill: "#DCDEE2" }}
                    d="M465.429,159.887C508.154,86.257,512,0.005,512,0.002L408.772,103.23L206.521,305.481l-46.763,46.763 c40.555,40.555,84.888,39.947,109.182,15.655c24.292-24.292,160.266-160.266,160.266-160.266 C443.638,193.199,455.569,176.88,465.429,159.887z"
                  ></path>{" "}
                  <path
                    style={{ fill: "#F74D37" }}
                    d="M512,0.002c0,0-86.254,3.843-159.885,46.57l56.657,56.657l56.657,56.657 C508.154,86.257,512,0.005,512,0.002z"
                  ></path>{" "}
                  <path
                    style={{ fill: "#444242" }}
                    d="M206.52,305.481l-62.418-62.418c-24.293,24.293-24.9,68.627,15.655,109.182 s84.888,39.947,109.182,15.655L206.52,305.481z"
                  ></path>{" "}
                  <path
                    style={{ fill: "#3A3839" }}
                    d="M268.938,367.899l-62.418-62.418l-46.763,46.763C200.311,392.799,244.646,392.191,268.938,367.899z"
                  ></path>{" "}
                  <circle
                    style={{ fill: "#BCE8F7" }}
                    cx="344.932"
                    cy="167.068"
                    r="40.764"
                  ></circle>{" "}
                  <polygon
                    style={{ fill: "#F74D37" }}
                    points="273.048,238.951 273.048,238.951 167.215,314.433 91.733,420.267 91.731,420.268 197.566,344.786 "
                  ></polygon>{" "}
                  <g>
                    {" "}
                    <polygon
                      style={{ fill: "#C43D2C" }}
                      points="197.566,344.786 273.048,238.951 273.048,238.951 91.733,420.267 91.731,420.268 "
                    ></polygon>{" "}
                    <path
                      style={{ fill: "#C43D2C" }}
                      d="M512,0.001L408.772,103.229l56.657,56.657C508.154,86.257,512,0.005,512,0.001z"
                    ></path>{" "}
                  </g>{" "}
                  <path
                    style={{ fill: "#8EC1D6" }}
                    d="M373.756,195.894c15.919-15.919,15.919-41.729,0-57.649l-57.649,57.649 C332.025,211.814,357.836,211.814,373.756,195.894z"
                  ></path>{" "}
                </g>
              </svg>
            </motion.div>
          </div>

          {/* Timeline Animation */}
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
                  className="text-blue-400 text-lg ml-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {step}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
