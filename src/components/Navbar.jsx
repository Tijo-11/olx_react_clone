import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import LocationSearch from './LocationSearch';
import LanguageSelector from './LanguageSelector';
import olxLogo from '../assets/olx-logo.svg';

function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      <Link to="/" className="flex-shrink-0">
        <img src={olxLogo} alt="OLX Logo" className="h-8" />
      </Link>
      <div className="flex items-center flex-1 space-x-4 ml-4">
        <LocationSearch />
        <SearchBox />
        <LanguageSelector />
        <Link to="/favourites" className="text-gray-600 hover:text-indigo-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </Link>
        {user ? (
          <span className="text-indigo-600">{user.email}</span>
        ) : (
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        )}
        <Link to="/sell" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-2 rounded-full hover:bg-blue-50">
          +Sell
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;