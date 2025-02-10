import type React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
const {isLoggedIn, username, logout} = useAuth()
const navigate = useNavigate()

const handleLogout = () => {
    logout()
    navigate("/")
}

  return (
    <header className="bg-white shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Velog
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link to="/write" className="text-gray-600 hover:text-blue-600">
                  Write
                </Link>
              </li>
            )}
            {isLoggedIn ? (
              <>
                <li className="text-gray-600"> welcome, {username}</li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-4 rounded"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-4 rounded"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
