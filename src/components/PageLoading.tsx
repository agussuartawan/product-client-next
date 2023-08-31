export function PageLoading() {
    return (
        <div className="w-full h-screen absolute z-50 bg-gray-600 bg-opacity-75">
            <div className="absolute px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-transparent rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                loading...
            </div>
            <div className="flex items-center justify-center w-full h-screen z-40 relative"></div>
        </div>
    )
}
