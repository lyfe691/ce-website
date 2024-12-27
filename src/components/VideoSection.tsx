export const VideoSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See it in Action
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Watch how easily you can extract and analyze website code
          </p>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-4xl aspect-video rounded-xl bg-gray-100 shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">Video Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};