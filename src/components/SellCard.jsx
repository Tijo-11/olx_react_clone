import { useState } from 'react';

function SellCard() {
  const images = Array.from({ length: 12 }, (_, i) => `/Images/${i + 1}.jpg`);
  const products = ['iPhone 13', 'Sofa', 'Honda Activa', 'Laptop', 'Dining Table', 'TV', 'Bicycle', 'Apartment'];
  const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Pune'];
  const dates = ['3 days ago', 'April 21', 'May 1', '2 days ago', 'April 15'];

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const getRandomPrice = () => Math.floor(Math.random() * 99001 + 1000);

  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={getRandom(images)}
          alt="Product"
          className="w-full h-40 object-cover"
        />
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        >
          <svg className="w-6 h-6" fill={isFavorited ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">₹{getRandomPrice()}</h3>
        <p className="text-gray-600">{getRandom(products)}</p>
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>{getRandom(dates)}</span>
          <span className="text-xs">{getRandom(locations)}</span>
        </div>
      </div>
    </div>
  );
}

export default SellCard;