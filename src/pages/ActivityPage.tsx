
import React from 'react';
import Activity from '../components/Activity';
import Header from '../components/Header';
import MainNavigation from '../components/MainNavigation';

const ActivityPage = () => {
  return (
    <div className="min-h-screen bg-instagram-verylightgray pb-14 md:pb-0">
      <Header />
      <Activity />
      <MainNavigation />
    </div>
  );
};

export default ActivityPage;
