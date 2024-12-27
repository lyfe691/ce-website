import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900/50 to-purple-900/20 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4">
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
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative mx-auto max-w-4xl group">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-purple-400 opacity-25 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200"></div>
            <div className="relative aspect-video rounded-xl bg-gray-800/50 shadow-2xl ring-1 ring-gray-700/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-gray-900/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-purple-600/20 p-6 backdrop-blur-sm cursor-pointer group/play"
                >
                  <Play className="h-12 w-12 text-purple-400 transition-transform group-hover/play:scale-110" />
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/80 to-transparent">
                <p className="text-sm text-gray-300 text-center">
                  Click to watch the demo video
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};