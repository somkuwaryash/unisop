// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import CollegeList from '../components/CollegeList';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">College Directory</h1>
        <CollegeList />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
