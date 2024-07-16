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
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  </div>
);

export default ProductPage;