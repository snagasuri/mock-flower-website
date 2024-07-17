import React from 'react';
import Header from '../components/Header';

const plans = [
  {
    name: 'Basic',
    price: '$9.99/mo',
    originalPrice: '$16.97/mo',
    discount: '41% OFF',
    features: [
      'Connect a custom domain',
      'Content and design tools',
      'Get found on Google with SEO',
      'Online payments with Pay Links',
      '100 email sends per month'
    ],
    recommended: false
  },
  {
    name: 'Premium',
    price: '$14.99/mo',
    originalPrice: '$29.97/mo',
    discount: '50% OFF',
    features: [
      'Everything in Basic, plus:',
      'Launch social ads',
      '25,000 email marketing sends/mo',
      'Book and accept payments for appointments',
      'Create Facebook, Instagram, and Google Ads',
      'AI Chatbot NEW'
    ],
    recommended: true
  },
  {
    name: 'Commerce',
    price: '$20.99/mo',
    originalPrice: '$34.97/mo',
    discount: '40% OFF',
    features: [
      'Everything in Premium, plus:',
      'Sell unlimited products on your online store',
      'Sell on leading marketplaces: 1,000 orders/mo',
      '100,000 email marketing sends/mo',
      'Automated sales tax calculation and auto-populated tax forms'
    ],
    recommended: false
  }
];

const PricingPlan = ({ plan }) => (
  <div className={`border p-4 rounded-lg shadow-lg flex flex-col ${plan.recommended ? 'border-teal-500 border-2' : ''}`}>
    {plan.recommended && (
      <div className="bg-teal-500 text-white p-1 rounded-t-lg text-center">
        RECOMMENDED
      </div>
    )}
    <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
    <div className="flex items-baseline mb-2">
      <span className="text-2xl font-bold">{plan.price}</span>
      <span className="text-gray-500 line-through ml-2">{plan.originalPrice}</span>
      <span className="text-green-500 ml-2">{plan.discount}</span>
    </div>
    <button className="bg-black text-white p-2 rounded-lg mb-4">Add to Cart</button>
    <ul className="text-sm space-y-2">
      {plan.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

const SetupPage = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col">
    <Header />
    <div className="flex-grow container mx-auto px-6 py-12 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Pick the right plan for your site</h1>
      <div className="flex mb-8">
        <button className="bg-gray-200 p-2 rounded-l-lg">Billed monthly</button>
        <button className="bg-black text-white p-2 rounded-r-lg">Billed yearly UP TO 50% OFF</button>
      </div>
      <div className="flex space-x-4">
        <button className="bg-gray-200 p-2 rounded">Remove GoDaddy ads</button>
        <button className="bg-gray-200 p-2 rounded">Add unlimited pages</button>
        <button className="bg-gray-200 p-2 rounded">Professional email for a year</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {plans.map((plan, index) => (
          <PricingPlan key={index} plan={plan} />
        ))}
      </div>
      <button className="mt-8 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors text-lg">
        Compare Plans
      </button>
      <div className="mt-8">
        <h2 className="text-lg font-semibold">More features with each plan</h2>
      </div>
    </div>
  </div>
);

export default SetupPage;
