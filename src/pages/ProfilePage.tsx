
import React from 'react';
import Profile from '../components/Profile';
import Header from '../components/Header';
import MainNavigation from '../components/MainNavigation';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-instagram-verylightgray pb-14 md:pb-0">
      <Header />
      <Profile />
      <MainNavigation />
    </div>
  );
};

export default ProfilePage;
