import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = Array(30).fill().map((_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: ((index + 1) * 3.50).toFixed(2),
  image: 'test.png'
}));

const ProductPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main className="container mx-auto px-4 py-8">
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
