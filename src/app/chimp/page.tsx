"use client";
import { useState } from "react";
import {
  CampaignResponse,
  CampaignsApi,
  Configuration,
} from "@dynopii/callchimp";
import Swal from "sweetalert2";

const config = new Configuration({
  basePath: "https://api.callchimp.ai/v1",
  apiKey: "JVar9MAk.IBnqEYfXztixw8jDhVhswwuP7M71lE8M",
});

const campaignsApi = new CampaignsApi(config);

const HomePage: React.FC = () => {
  const [campaigns, setCampaigns] = useState<CampaignResponse[] | undefined>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const listCampaigns = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await campaignsApi.campaignsList();
      setCampaigns(response.results);
    } catch (err) {
      setError("Error fetching campaigns");
      console.error("Error fetching campaigns:", err);
    } finally {
      setLoading(false);
    }
  };

  const bookCall = () => {
    Swal.fire({
      icon: "success",
      title: "Call Booked",
      text: "Your call has been booked successfully!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
        Discover Our Latest Campaigns
      </h1>
      <div className="flex gap-4">
        <button
          onClick={listCampaigns}
          className="bg-lightred hover:bg-white hover:text-black text-white font-semibold py-2 px-4 rounded mb-6"
        >
          Show Campaigns
        </button>
        <button
          onClick={bookCall}
          className="bg-lightred hover:bg-white hover:text-black text-white font-semibold py-2 px-4 rounded mb-6"
        >
          Book a Call
        </button>
      </div>
      {loading && <p className="text-blue-300 mb-4">Loading...</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <ul className="w-full max-w-lg">
        {campaigns?.map((campaign, index) => (
          <li
            key={index}
            className="bg-gray-800 p-4 mb-2 rounded shadow-md flex items-center justify-between"
          >
            <span>{campaign.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
