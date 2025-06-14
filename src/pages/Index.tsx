
import React from 'react';
import Feed from '../components/Feed';
import Header from '../components/Header';
import MainNavigation from '../components/MainNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-instagram-verylightgray pb-14 md:pb-0">
      <Header />
      <Feed />
      <MainNavigation />
    </div>
  );
};

export default Index;
