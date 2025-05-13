
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { User, Settings, Grid } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const mockPhotos = [
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80',
  'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80',
  'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80',
  'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80',
  'https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80'
];

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto pt-16 pb-16 md:pb-4 md:pt-4 md:ml-16">
      {/* Profile header */}
      <div className="p-4 flex flex-col md:flex-row">
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <Avatar className="h-20 w-20 md:h-32 md:w-32">
            <AvatarImage src="https://source.unsplash.com/random/100x100/?portrait" alt="johndoe" />
            <AvatarFallback>
              <User size={32} />
            </AvatarFallback>
          </Avatar>
        </div>
        
        <div className="flex-1 text-center md:text-left md:ml-10">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <h1 className="text-xl md:text-2xl font-light mb-2 md:mb-0">johndoe</h1>
            <div className="flex space-x-2 md:ml-4">
              <Button variant="outline" size="sm" className="text-sm">
                Edit Profile
              </Button>
              <Button variant="ghost" size="sm" className="text-sm p-0 h-8 w-8">
                <Settings size={18} />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-start space-x-6 my-4">
            <div><span className="font-semibold">134</span> posts</div>
            <div><span className="font-semibold">4,289</span> followers</div>
            <div><span className="font-semibold">1,432</span> following</div>
          </div>
          
          <div className="text-left">
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-sm">
              Travel | Photography | Nature<br />
              Exploring one adventure at a time ✈️<br />
              www.johndoe-photography.com
            </p>
          </div>
        </div>
      </div>
      
      {/* Profile content */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="posts" className="flex items-center">
            <Grid size={16} className="mr-2" />
            <span className="hidden md:inline">Posts</span>
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center">
            <Heart size={16} className="mr-2" />
            <span className="hidden md:inline">Saved</span>
          </TabsTrigger>
          <TabsTrigger value="tagged" className="flex items-center">
            <User size={16} className="mr-2" />
            <span className="hidden md:inline">Tagged</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="posts" className="mt-0">
          <div className="grid grid-cols-3 gap-1">
            {mockPhotos.map((photo, index) => (
              <div key={index} className="aspect-square overflow-hidden">
                <img 
                  src={photo} 
                  alt={`Post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="saved" className="mt-0">
          <div className="h-40 flex items-center justify-center">
            <p className="text-gray-500">No saved posts yet.</p>
          </div>
        </TabsContent>
        
        <TabsContent value="tagged" className="mt-0">
          <div className="h-40 flex items-center justify-center">
            <p className="text-gray-500">No tagged posts yet.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
