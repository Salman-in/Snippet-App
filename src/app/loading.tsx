
export default function Loading() {
    return (
      <div role="status" className="space-y-2.5 animate-pulse max-w-full">
        <div className="flex items-center w-full justify-between mb-4">
          <div className="h-9.5 bg-gray-200 rounded-xl dark:bg-gray-700 w-32"></div>
          <div className="h-9.5 ms-2 bg-gray-300 rounded-xl dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full max-w-full">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        </div>
        <div className="flex items-center w-full max-w-full">
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  