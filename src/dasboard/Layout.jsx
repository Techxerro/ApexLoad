import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from "../assets/img/apexloads 1.png";
import icon1 from "../assets/img/9055226_bxs_dashboard_icon 1.png";
import icon2 from "../assets/img/211817_search_strong_icon 2.png";
import icon3 from "../assets/img/9991443_update_data_load_system_upload_icon 1.png";
import icon4 from "../assets/img/9024900_truck_light_icon 1.png";
import icon5 from "../assets/img/172475_headset_support_icon 1.png";
import icon6 from "../assets/img/290105_gear_options_preferences_settings_tools_icon 1.png";

const Layout = ({ children }) => {
  const location = useLocation();
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [isMyTruckOpen, setIsMyTruckOpen] = useState(false);
 

  const toggleRequestMenu = () => {
    setIsRequestOpen(!isRequestOpen);
  };

  const toggleTruckMenu = () => {
    setIsMyTruckOpen(!isMyTruckOpen);
  };

  return (
    <div className="flex bg-black text-white">
      <aside className="w-64 h-screen bg-[#1b1b1b]">
        <Link to='/'>
          <img src={icon} alt="Apexloads" className="w-40 mx-auto my-4" />
        </Link>
        <p className="text-[#ffffff99] ml-6 mb-2">Main Menu</p>
        <nav>
          <ul>
            <NavItem to="/dashboard" icon={icon1} text="Dashboard" />
            <NavItem to="/dashboard/search-loads" icon={icon2} text="Search Loads" />
            <NavItem 
              to="/dashboard/my-request" 
              icon={icon3} 
              text="My Request" 
              onClick={toggleRequestMenu}
            />
            {isRequestOpen && (
              <ul className="ml-6">
                <NavItem to="/dashboard/post-a-load" icon={icon4} text="Post a Load" />
              </ul>
            )}
            <NavItem to="/dashboard/my-trucks" icon={icon4} text="My Trucks" onClick={toggleTruckMenu} />
            {
              isMyTruckOpen && (<ul className="ml-6">
                <NavItem to="/dashboard/post-a-truck" icon={icon4} text="Post a Truck" />
              </ul>)
            }
            <NavItem to="/dashboard/live-support" icon={icon5} text="Live Support" />
            <NavItem to="/dashboard/tools" icon={icon6} text="Tools" />
          </ul>
        </nav>
        <hr className="my-4" />
        <nav>
          <ul>
            <NavItem to="/dashboard/feedback" icon={icon6} text="Feedback" />
            <NavItem to="/dashboard/settings" icon={icon6} text="Settings" />
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

const NavItem = ({ to, icon, text, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li onClick={onClick}>
      <Link
        to={to}
        className={`flex items-center px-6 py-2 my-1 ${
          isActive ? 'bg-red-600' : 'hover:bg-gray-700'
        }`}
      >
        <img src={icon} alt={text} className="mr-2 w-5 h-5" />
        {text}
      </Link>
    </li>
  );
};

export default Layout;
