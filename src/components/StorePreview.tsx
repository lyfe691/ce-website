import { motion } from "framer-motion";
import { Chrome, Star } from "lucide-react";

export const StorePreview = () => {
  return (
    <div className="relative bg-gradient-to-t from-gray-900 to-purple-900/20 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-purple-400 opacity-25 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200"></div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-800/50 shadow-2xl ring-1 ring-gray-700/50">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Extension Preview"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600/10 backdrop-blur">
                    <Chrome className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-white">Website Code Extractor</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current text-yellow-500" />
                        <span className="text-sm text-gray-300">4.9</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">Available on Chrome Web Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600/10 text-purple-400 hover:bg-purple-600/20 transition-colors duration-200 backdrop-blur-sm ring-1 ring-purple-400/20"
            >
              <Chrome className="mr-2 h-5 w-5" />
              View in Chrome Web Store
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};