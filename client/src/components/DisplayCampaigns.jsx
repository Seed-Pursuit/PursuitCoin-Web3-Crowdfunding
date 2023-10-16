import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import FundCard from './FundCard';
import { loader } from '../assets';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  // owner, title, description, target, deadline, amountCollected, image, handleClick
  // Static campaign data
  const staticCampaigns = [
    {
      owner: 'seedfund1',
      title: 'Tech Startup: AI Chatbot',
      description: 'Invest in an AI chatbot startup with cutting-edge technology.',
      amountCollected: 0,
      target: 50000,
      deadline: 30,
      image: 'https://plus.unsplash.com/premium_photo-1682023585717-5cb1fad1b141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      owner: 'seedfund2',
      title: 'Eco-Friendly Packaging Solution',
      description: 'Invest in a startup creating eco-friendly packaging solutions.',
      amountCollected: 0,
      target: 75000,
      deadline: 45,
      image: 'https://images.unsplash.com/photo-1524638088-758d9961fc6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80',
    },
    {
      owner: 'seedfund3',
      title: 'Food Delivery Innovation',
      description: 'Invest in a startup revolutionizing food delivery services.',
      amountCollected: 0,
      target: 60000,
      deadline: 60,
      image: 'https://plus.unsplash.com/premium_photo-1664475382326-3dc5510e4ff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    },
    {
      owner: 'seedfund4',
      title: 'Renewable Energy Tech',
      description: 'Invest in a startup focused on renewable energy technology.',
      amountCollected: 0,
      target: 80000,
      deadline: 45,
      image: 'https://plus.unsplash.com/premium_photo-1668078531255-75590ed45a39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      owner: 'seedfund5',
      title: 'Healthcare Innovation',
      description: 'Invest in a healthcare startup with groundbreaking innovations.',
      amountCollected: 0,
      target: 70000,
      deadline: 60,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
    },
    {
      owner: 'seedfund6',
      title: 'AI-Powered Education',
      description: 'Invest in an edtech startup using AI to transform education.',
      amountCollected: 0,
      target: 55000,
      deadline: 30,
      image: 'https://media.istockphoto.com/id/1217739350/photo/brain-inside-the-light-bulb-creative-idea-concept.jpg?s=1024x1024&w=is&k=20&c=EKi2OjUt3QCp3D9YU9LcefS8uaTwKRMTUYCXTEvePNQ=',
    },
  ];
  

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {title} ({campaigns.length + staticCampaigns.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />}

        {!isLoading && campaigns.length === 0 && staticCampaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaigns yet.
          </p>
        )}

        {/* Display fetched campaigns */}
        {!isLoading &&
          campaigns.map((campaign) => (
            <FundCard
              key={uuidv4()}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}

        {/* Display static campaigns */}
        {staticCampaigns.map((campaign) => (
          <FundCard
            key={uuidv4()}
            {...campaign}
            handleClick={() => handleNavigate(campaign)}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
