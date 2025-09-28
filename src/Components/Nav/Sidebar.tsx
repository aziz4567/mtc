import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { navigationItems } from '../../../Data/mockData';

interface SidebarProps {
  isAuthenticated: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isAuthenticated = false, setIsSidebarOpen, isSidebarOpen }) => {
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
        {isSidebarOpen && (
          <div className="fixed z-40 md:hidden inset-0 w-60 flex ">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleSidebar} />
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <div className="absolute top-0 pt-2 -right-14">
                <button
                  onClick={toggleSidebar}
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <nav className="mt-5 px-2 space-y-1">
                  {visibleNavItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.href}
                      className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                        isActive(item.href)
                          ? 'text-base-3 bg-base-1 font-semibold'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                      onClick={toggleSidebar}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
        </>
    );
}

export default Sidebar;
