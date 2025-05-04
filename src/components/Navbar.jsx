import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import SearchBox from './SearchBox';
import LocationSearch from './LocationSearch';
import LanguageSelector from './LanguageSelector';
import olxLogo from '../assets/olx-logo.svg';
import avatar from '../assets/avatar.png';

function Navbar() {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

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
        {user && (
          <>
            <Link to="/chat" className="text-gray-600 hover:text-indigo-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </Link>
            <Link to="/notifications" className="text-gray-600 hover:text-indigo-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </Link>
          </>
        )}
        {user ? (
          <div className="relative">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                <Link to="/profile" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">View Profile</Link>
                <Link to="/settings" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Settings</Link>
                <Link to="/help" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Help</Link>
                <button onClick={signOut} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
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