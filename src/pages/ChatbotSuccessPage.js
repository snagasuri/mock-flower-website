import React from 'react';
import { Link } from 'react-router-dom';

const ChatbotSuccessPage = () => (
  <div className="min-h-screen bg-white-300 flex flex-col">
    <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-center lowercase">congratulations, margaret!</h1>
      <p className="text-xl text-center mb-8 lowercase">
        we understand you sell locally produced flowers, and would like us to take note of potential social occasions for your customers, as well as natural factors such as the weather and season. your friendly and helpful chatbot has been successfully created and added to your account.
      </p>
      <Link to="/">
        <button className="px-6 py-3 bg-pink-300 text-white rounded-full hover:bg-pink-400 transition-colors lowercase text-lg">
          return to shop
        </button>
      </Link>
    </main>
  </div>
);

export default ChatbotSuccessPage;
