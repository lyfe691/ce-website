import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-up [--animation-delay:200ms]">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Extract Website Code
            <span className="text-primary block">With One Click</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            A powerful Chrome extension that lets you instantly extract and analyze the source code of any website. Perfect for developers, designers, and curious minds.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg"
              onClick={() => window.open("https://chrome.google.com/webstore", "_blank")}
            >
              Get Extension
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};