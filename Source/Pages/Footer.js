import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-700 py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link to="#" className="hover:text-gray-400">
            About Us
          </Link>
          <Link to="#" className="hover:text-gray-400">
            Contact
          </Link>
          <Link to="#" className="hover:text-gray-400">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;