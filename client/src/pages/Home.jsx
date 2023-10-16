import React, { useState, useEffect } from 'react';
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';
import { thirdweb } from '../assets';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex flex-col items-center justify-center p-8 rounded-md">
      <div className="text-center mb-8 flex">
        <h1 className="font-epilogue font-bold text-4xl md:text-5xl mb-2 flex">
        <img src={thirdweb} alt='logo' className='w-30 '/>
          Welcome to Seed Pursuit
        </h1>
        <p className="font-epilogue text-lg text-gray-400">
          
        </p>
      </div>

      <div className="w-full max-w-screen-lg">
        <DisplayCampaigns
          title="All Campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
        />
      </div>
    </div>
  );
};

export default Home;
