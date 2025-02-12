export default function LoadingPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <div className="relative">
          <div className="w-24 h-24 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
          <div
            className="w-24 h-24 border-t-4 border-b-4 border-purple-500 rounded-full animate-spin absolute top-0 left-0"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
          <div
            className="w-24 h-24 border-t-4 border-b-4 border-pink-500 rounded-full animate-spin absolute top-0 left-0"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>
        <h2 className="mt-8 text-2xl font-semibold text-white">Loading...</h2>
        <div className="mt-4 text-gray-400 text-sm animate-pulse">Please wait while we prepare your content</div>
      </div>
    )
  }
  
  