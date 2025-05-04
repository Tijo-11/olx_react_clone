function LocationSearch() {
  return (
    <div className="flex items-center border-2 border-black rounded-md">
      <svg className="w-5 h-5 text-gray-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      </svg>
      <input
        type="text"
        placeholder="Location"
        className="p-2 w-32 focus:outline-none bg-transparent"
      />
    </div>
  );
}

export default LocationSearch;