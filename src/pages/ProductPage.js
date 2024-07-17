import React, { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import testImage from './test.png';

const flowerNames = [
  "Rose", "Tulip", "Sunflower", "Lily", "Orchid", "Daisy", "Carnation", "Peony", "Chrysanthemum", "Daffodil",
  "Iris", "Hydrangea", "Dahlia", "Lavender", "Marigold", "Poppy", "Jasmine", "Gardenia", "Zinnia", "Aster",
  "Bluebell", "Forget-me-not", "Snapdragon", "Pansy", "Geranium", "Anemone", "Cosmos", "Foxglove", "Lilac", "Camellia"
];

const products = flowerNames.map((name, index) => ({
  id: index + 1,
  name: name,
  price: ((index + 1) * 3.50).toFixed(2),
  image: testImage
}));

const ProductPage = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim() !== '') {
      setChatMessages([...chatMessages, { type: 'user', content: chatInput }]);
      setTimeout(() => {
        setChatMessages(prevMessages => [...prevMessages, { type: 'bot', content: 'test received successfully' }]);
      }, 500);
      setChatInput('');
    }
  };

  return (
    <div className="min-h-screen bg-white-300 flex flex-col relative">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        {/* Pagination placeholder */}
        <div className="mt-16 flex justify-center">
          <button className="mx-3 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors text-lg">Previous</button>
          <button className="mx-3 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors text-lg">Next</button>
        </div>
      </main>
      <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#D20F77] p-3 text-white lowercase">
          <h3 className="text-xl font-semibold">chat with us</h3>
        </div>
        <div className="p-4">
          <div className="mb-4 h-48 overflow-y-auto">
            {chatMessages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.type === 'user' ? 'text-right' : ''}`}>
                <span className={`inline-block p-2 rounded-lg text-sm lowercase ${
                  message.type === 'user' ? 'bg-gray-200' : 'bg-[#D20F77] text-white'
                }`}>
                  {message.content}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit}>
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="type your message..."
              className="w-full p-2 border rounded-lg text-sm lowercase"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
