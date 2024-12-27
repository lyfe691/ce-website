// VideoSection.tsx

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

export const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Esc key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-gray-900/50 to-purple-900/20 py-24 sm:py-32">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4">
        {/* Heading and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-100">
            See it in Action
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Watch how easily you can extract and analyze website code with our powerful extension
          </p>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative mx-auto max-w-4xl group">
            {/* Decorative Gradient */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-purple-400 opacity-25 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200"></div>

            {/* Video Container */}
            <div className="relative aspect-video rounded-xl bg-gray-800/50 shadow-2xl ring-1 ring-gray-700/50 overflow-hidden">
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-gray-900/50"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-full bg-purple-600/20 p-6 backdrop-blur-sm cursor-pointer group/play"
                >
                  <Play className="h-12 w-12 text-purple-400 transition-transform group-hover/play:scale-110" />
                </motion.div>
              </div>

              {/* Instruction Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/80 to-transparent">
                <p className="text-sm text-gray-300 text-center">
                  Click to watch the demo video
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal for Video Playback */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-3xl mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close Video"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Video Element */}
              <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1"
                  title="Demo Video"
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
