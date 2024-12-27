import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <div className="relative bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-purple-500/5"></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See it in Action
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Watch how easily you can extract and analyze website code
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-full max-w-4xl aspect-video rounded-xl bg-gray-800/50 shadow-2xl ring-1 ring-gray-700/50 backdrop-blur">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-purple-600/10 p-6 backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer group">
                <Play className="h-12 w-12 text-purple-500 transition-transform group-hover:scale-110" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};