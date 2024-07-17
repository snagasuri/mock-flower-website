import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const ChatbotSuccessPage = () => (
  <div className="min-h-screen bg-white-300 flex flex-col">
    <Header />
    <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-center lowercase">congratulations!</h1>
      <p className="text-xl text-center mb-8 lowercase">
        your chatbot has been successfully created and added to your account.
      </p>
      <Link to="/">
        <button className="px-6 py-3 bg-pink-300 text-white rounded-full hover:bg-pink-400 transition-colors lowercase text-lg">
          return to home
        </button>
      </Link>
    </main>
  </div>
);

export default ChatbotSuccessPage;
