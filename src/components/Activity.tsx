
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { User } from 'lucide-react';
import { Button } from './ui/button';

interface ActivityItem {
  id: string;
  username: string;
  avatar?: string;
  action: string;
  time: string;
  image?: string;
  following?: boolean;
}

const mockActivity: ActivityItem[] = [
  {
    id: '1',
    username: 'janedoe',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait=1',
    action: 'liked your photo.',
    time: '1h',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=100&h=100',
  },
  {
    id: '2',
    username: 'alex_travel',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait=2',
    action: 'started following you.',
    time: '3h',
    following: false,
  },
  {
    id: '3',
    username: 'photography_pro',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait=3',
    action: 'commented: "Amazing shot! 📸"',
    time: '5h',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=100&h=100',
  },
  {
    id: '4',
    username: 'mountain_climber',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait=4',
    action: 'started following you.',
    time: '1d',
    following: true,
  },
  {
    id: '5',
    username: 'sarah_smith',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait=5',
    action: 'liked your photo.',
    time: '2d',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=100&h=100',
  },
];

const Activity = () => {
  return (
    <div className="max-w-md mx-auto pt-16 pb-16 md:pb-4 md:pt-4 md:ml-16 px-4">
      <h1 className="text-xl font-semibold mb-6">Activity</h1>
      
      <div className="space-y-4">
        {mockActivity.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center flex-1">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={item.avatar} alt={item.username} />
                <AvatarFallback>
                  <User size={16} />
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-semibold">{item.username}</span>{' '}
                  {item.action}{' '}
                  <span className="text-instagram-gray">{item.time}</span>
                </p>
              </div>
            </div>
            
            {item.image ? (
              <div className="ml-2 h-10 w-10">
                <img 
                  src={item.image} 
                  alt="Activity related" 
                  className="object-cover h-full w-full"
                />
              </div>
            ) : (
              <Button 
                size="sm" 
                className={item.following ? "bg-instagram-lightgray hover:bg-instagram-lightgray text-instagram-black" : "bg-instagram-blue"}
                variant={item.following ? "outline" : "default"}
              >
                {item.following ? 'Following' : 'Follow'}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
