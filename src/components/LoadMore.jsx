function LoadMore({ onLoadMore }) {
    return (
      <div className="flex justify-center mt-6">
        <button
          onClick={onLoadMore}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Load More
        </button>
      </div>
    );
  }
  
  export default LoadMore;