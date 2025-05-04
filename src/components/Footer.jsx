function Footer() {
    return (
      <footer className="bg-white text-gray-800 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About OLX India</h3>
              <p className="text-gray-600">
                OLX India is your trusted platform for buying and selling bikes, properties, jobs, cars, and more. Connect with millions of buyers and sellers across the country.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition">Browse Listings</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition">Post an Ad</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition">Help Center</a></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Email: <a href="mailto:support@olx.in" className="hover:text-blue-500 transition">support@olx.in</a></li>
                <li>Phone: <a href="tel:+911234567890" className="hover:text-blue-500 transition">+91 123 456 7890</a></li>
                <li>Address: OLX India Pvt. Ltd., Mumbai, India</li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-500 transition">Facebook</a>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition">Instagram</a>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition">LinkedIn</a>
              </div>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} OLX India Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;