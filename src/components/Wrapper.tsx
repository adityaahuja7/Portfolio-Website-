"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const page_variant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        key={path}
        initial="initial"
        animate="animate"
        variants={page_variant}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Wrapper;
