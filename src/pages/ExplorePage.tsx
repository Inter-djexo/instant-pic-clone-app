
import React from 'react';
import Explore from '../components/Explore';
import Header from '../components/Header';
import MainNavigation from '../components/MainNavigation';

const ExplorePage = () => {
  return (
    <div className="min-h-screen bg-instagram-verylightgray pb-14 md:pb-0">
      <Header />
      <Explore />
      <MainNavigation />
    </div>
  );
};

export default ExplorePage;
