
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

const mockPhotos = [
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80',
  'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80',
  'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80',
  'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80',
  'https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80',
  'https://source.unsplash.com/random/300x300/?nature',
  'https://source.unsplash.com/random/300x300/?city',
  'https://source.unsplash.com/random/300x300/?people',
  'https://source.unsplash.com/random/300x300/?food',
  'https://source.unsplash.com/random/300x300/?architecture',
  'https://source.unsplash.com/random/300x300/?travel'
];

const Explore = () => {
  return (
    <div className="max-w-4xl mx-auto pt-16 pb-16 md:pb-4 md:pt-4 md:ml-16 px-4">
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input 
          type="text" 
          placeholder="Search" 
          className="w-full pl-10 bg-gray-100 border-none focus:ring-0"
        />
      </div>
      
      <div className="grid grid-cols-3 gap-1">
        {mockPhotos.map((photo, index) => (
          <div key={index} className="aspect-square overflow-hidden relative group">
            <img 
              src={photo} 
              alt={`Explore ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-opacity-30 transition-all">
              <div className="flex space-x-4 text-white font-medium">
                <div className="flex items-center">
                  <Heart size={16} className="fill-white mr-2" />
                  <span>{Math.floor(Math.random() * 1000)}</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare size={16} className="fill-white mr-2" />
                  <span>{Math.floor(Math.random() * 100)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
