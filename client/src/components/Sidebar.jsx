import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo, sun } from '../assets';
import { navlinks } from '../constants';

const Icon = ({ name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-12 h-12 rounded-full flex justify-center items-center ${isActive === name ? 'bg-primary text-white' : 'bg-secondary hover:bg-primary'
      } ${!disabled && 'cursor-pointer'}`}
    onClick={handleClick}
  >
    <img
      src={imgUrl}
      alt="fund_logo"
      className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`}
    />
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="p-3 bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col justify-between items-center h-screen bg-primary text-white py-8">
      <Link to="/" className="mb-8">
        <img src={logo} alt="logo" className="w-12 h-12" />
      </Link>

      <div className="flex flex-col justify-center items-center space-y-4">
        {navlinks.map((link) => (
          <Icon
            key={link.name}
            {...link}
            isActive={isActive}
            handleClick={() => {
              if (!link.disabled) {
                setIsActive(link.name);
                navigate(link.link);
              }
            }}
          />
        ))}
      </div>

      <div className="w-12 h-12 bg-secondary hover:bg-tertiary transition-colors rounded-full flex justify-center items-center">
        <img src={sun} alt="sun_icon" className="w-1/2 h-1/2" />
      </div>
    </div>
  );
};

export default Sidebar;
