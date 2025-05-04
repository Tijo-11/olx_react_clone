import { Link } from 'react-router-dom';

function PromoCard() {
  return (
    <div className="bg-blue-600 text-white shadow-md rounded-lg overflow-hidden flex flex-col h-[280px]">
      <div className="p-4 flex-1 flex flex-col justify-center">
        <h3 className="text-lg font-semibold">Want to see your stuff here?</h3>
        <p className="text-sm mt-2">
          Make some extra cash by selling things in your community. Go on, it’s quick and easy
        </p>
      </div>
      <Link to="/sell">
        <button className="w-full bg-blue-600 text-white border-2 border-white py-2 hover:bg-blue-700">
          Start Selling
        </button>
      </Link>
    </div>
  );
}

export default PromoCard;