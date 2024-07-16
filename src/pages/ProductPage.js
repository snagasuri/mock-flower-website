import React from 'react';
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

const ProductPage = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Header />
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      
      {/* Pagination placeholder */}
      <div className="mt-12 flex justify-center">
        <button className="mx-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">Previous</button>
        <button className="mx-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">Next</button>
      </div>
    </main>
  </div>
);

export default ProductPage;
