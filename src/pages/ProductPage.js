import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = Array(30).fill().map((_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: ((index + 1) * 3.50).toFixed(2),
  image: `/placeholder-${index + 1}.jpg`
}));

const ProductPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main className="container mx-auto px-4 py-8 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-green-500 -ml-8 -mt-8"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-green-500 -mr-8 -mt-8"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-green-500 -ml-8 -mb-8"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-green-500 -mr-8 -mb-8"></div>
      
      <h1 className="text-4xl font-bold mb-8 text-center">Our Beautiful Flowers</h1>
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
