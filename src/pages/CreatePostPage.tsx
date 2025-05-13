
import React from 'react';
import CreatePost from '../components/CreatePost';
import Header from '../components/Header';
import MainNavigation from '../components/MainNavigation';

const CreatePostPage = () => {
  return (
    <div className="min-h-screen bg-instagram-verylightgray pb-14 md:pb-0">
      <Header />
      <CreatePost />
      <MainNavigation />
    </div>
  );
};

export default CreatePostPage;
