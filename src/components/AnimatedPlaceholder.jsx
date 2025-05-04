import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function AnimatedPlaceholder() {
  const words = ['bike', 'properties', 'jobs', 'cars'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-3 top-2.5 text-gray-400 pointer-events-none"
      >
        Search {words[index]}
      </motion.span>
    </AnimatePresence>
  );
}

export default AnimatedPlaceholder;