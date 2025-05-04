import { useState } from 'react';
import { Link } from 'react-router-dom';

function SecondaryNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: 'Cars', subtypes: ['Sedans', 'SUVs', 'Hatchbacks'] },
    { name: 'Mobiles', subtypes: ['Smartphones', 'Accessories', 'Tablets'] },
    { name: 'Bikes', subtypes: ['Motorcycles', 'Scooters', 'Bicycles'] },
    { name: 'Furniture', subtypes: ['Sofas', 'Beds', 'Tables'] },
    { name: 'Electronics', subtypes: ['TVs', 'Laptops', 'Appliances'] },
    { name: 'Real Estate', subtypes: ['Apartments', 'Houses', 'Plots'] },
  ];

  return (
    <nav className="bg-gray-200 py-3 w-full">
      <div className="mx-auto flex items-center justify-evenly space-x-4 px-4">
        <div
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="font-bold text-sm uppercase flex items-center">
            All Categories {isOpen ? '^' : '↓'}
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 w-screen bg-white shadow-lg p-6 grid grid-cols-3 gap-6 z-10">
              {categories.map((category) => (
                <div key={category.name}>
                  <Link to={`/category/${category.name.toLowerCase()}`} className="font-semibold">
                    {category.name}
                  </Link>
                  <ul>
                    {category.subtypes.map((subtype) => (
                      <li key={subtype}>
                        <Link to={`/category/${subtype.toLowerCase()}`} className="text-gray-600 hover:text-indigo-600">
                          {subtype}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        <Link to="/cars" className="text-sm">Cars</Link>
        <Link to="/motorcycles" className="text-sm">Motorcycles</Link>
        <Link to="/mobile-phones" className="text-sm">Mobile Phones</Link>
        <Link to="/for-sale-houses-apartments" className="text-sm">For Sale: Houses & Apartments</Link>
        <Link to="/scooters" className="text-sm">Scooters</Link>
        <Link to="/commercial-vehicles" className="text-sm">Commercial & Other Vehicles</Link>
        <Link to="/for-rent-houses-apartments" className="text-sm">For Rent: Houses & Apartments</Link>
      </div>
    </nav>
  );
}

export default SecondaryNavbar;