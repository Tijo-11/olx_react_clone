import AnimatedPlaceholder from './AnimatedPlaceholder';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/search');
  };

  return (
    <form onSubmit={handleSearch} className="relative flex items-center border-2 border-black rounded-md flex-1">
      <input
        type="text"
        className="p-2 w-full focus:outline-none bg-transparent"
      />
      <AnimatedPlaceholder />
      <button type="submit" className="p-2">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
}

export default SearchBox;