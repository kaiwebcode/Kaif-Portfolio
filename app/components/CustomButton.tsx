import { motion } from "framer-motion";

const CustomButton = ({ text, variant }: { text: string; variant?: "primary" | "secondary" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 cursor-pointer ${
        variant === "secondary"
          ? "border border-white text-white hover:bg-white hover:text-black"
          : "bg-gradient-to-r from-blue-400 to-sky-700 text-white hover:opacity-90"
      }`}
    >
      {text}
    </motion.button>
  );
};

export default CustomButton;
