import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { navigationItems } from '../../Data/mockData';


interface NavbarProps {
  showSidebar: boolean;
  isAuthenticated: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showSidebar = false, isAuthenticated = false, setIsSidebarOpen, isSidebarOpen }) => {
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
      
    const visibleNavItems = navigationItems.filter(item => 
        item.public || isAuthenticated
    );

    const isActive = (href: string) => {
        return location.pathname === href;
    };

    return (
        <>
        {/* Header - Sticky */}
      <header className="sticky m-2 top-1 z-40 bg-base-1 shadow-sm rounded-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

              {/* Logo */}
              <Link 
                to="/"
                className="flex-shrink-0 flex items-center ml-4 md:ml-0 hover:cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              >
                <img src="" alt="MTC" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-semibold text-gray-900">
                  Microsoft
                </span>
                {/*<Home className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-semibold text-gray-900">
                  Modern App
                </span> */}
              </Link>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex space-x-8">
              {visibleNavItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-md font-medium hover:underline decoration-2 decoration-blue-500 underline-offset-8 transition-all duration-300 ${
                    isActive(item.href) 
                      ? 'text-base-3 font-semibold underline' 
                      : 'text-gray-500 hover:text-gray-950'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>


            {/* Menu Button */}
            <div className="flex items-center">
              {!showSidebar && (
                <button
                  onClick={toggleSidebar}
                  className="w-auto h-auto p-2 rounded-md text-base-3 hover:text-gray-900 hover:bg-gray-100 md:hidden"
                  >
                  <Menu className="w-8 h-8" />
                </button>
              )}
            </div>


            {/* User Menu */}
            {/* <div className="flex items-center space-x-4">
              {isAuthenticated && currentUser ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    {currentUser.avatar && (
                      <img
                        src={currentUser.avatar}
                        alt={currentUser.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    )}
                    <span className="text-sm font-medium text-gray-700 hidden sm:block">
                      {currentUser.name}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <a
                    href="/login"
                    className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                  >
                    Login
                  </a>
                  <a
                    href="/register"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Register
                  </a>
                </div>
              )}
            </div> */}



          </div>
        </div>
      </header>


        </>
    );
}

export default Navbar;