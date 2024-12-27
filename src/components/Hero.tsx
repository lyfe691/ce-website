import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code2, Chrome } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container relative mx-auto px-4 pt-24 sm:pt-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/10 mb-8 ring-1 ring-purple-500/20"
            >
              <Code2 className="h-8 w-8 text-purple-500" />
            </motion.div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
              Website Code
              <span className="relative whitespace-nowrap">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-purple-500/60"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative ml-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-100">Extractor</span>
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300"
            >
              Extract and analyze website source code instantly. Perfect for developers, designers, and curious minds who want to peek under the hood of any website.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Button
                size="lg"
                className="group relative bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg shadow-[0_0_0_3px_rgba(139,92,246,0.3)] hover:shadow-[0_0_0_3px_rgba(139,92,246,0.5)] transition-all duration-300 overflow-hidden"
                onClick={() => window.open("https://chrome.google.com/webstore", "_blank")}
              >
                <span className="relative z-10 flex items-center">
                  <Chrome className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                  Get Extension
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-500 to-purple-900 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{
          clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
        }} />
      </div>
    </div>
  );
};