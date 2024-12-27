export const StorePreview = () => {
  return (
    <div className="bg-gradient-to-b from-white to-purple-50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Extension Preview"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200"
            >
              View in Chrome Web Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};