import { motion } from "framer-motion";

export function Rocket() {
  return (
    <motion.div
      initial={{ bottom: "10%", right: "5%" }}
      animate={{
        bottom: "120%",
        right: "-10%",
        rotate: 45,
      }}
      transition={{
        duration: 4,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: 2,
      }}
      className="absolute w-16 h-16 md:w-24 md:h-24"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 0.2,
          }}
          d="M6 15C5.2 15.8 4.5 16.5 4 17C3 18 3 19 3 19C3 19 4 19 5 18C5.5 17.5 6.2 16.8 7 16"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 0.2,
            delay: 0.2,
          }}
          d="M6 9C5.2 8.2 4.5 7.5 4 7C3 6 3 5 3 5C3 5 4 5 5 6C5.5 6.5 6.2 7.2 7 8"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 0.2,
            delay: 0.4,
          }}
          d="M15 6C15.8 5.2 16.5 4.5 17 4C18 3 19 3 19 3C19 3 19 4 18 5C17.5 5.5 16.8 6.2 16 7"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15L9 12L12 9L15 12L12 15ZM12 15V21M12 21H9M12 21H15"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 9C14.2091 9 16 7.20914 16 5C16 2.79086 14.2091 1 12 1C9.79086 1 8 2.79086 8 5C8 7.20914 9.79086 9 12 9Z"
          fill="#3B82F6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
