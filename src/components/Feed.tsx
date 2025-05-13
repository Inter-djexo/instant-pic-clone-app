
import React from 'react';
import PostCard, { Post } from './PostCard';

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    username: 'janedoe',
    userAvatar: 'https://source.unsplash.com/random/100x100/?portrait',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80',
    caption: 'Working remotely today! Loving the flexibility of my new job and the view is not bad either.',
    likes: 142,
    comments: 24,
    timestamp: '2 HOURS AGO'
  },
  {
    id: '2',
    username: 'nature_lover',
    userAvatar: 'https://source.unsplash.com/random/100x100/?person',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80',
    caption: 'Spotted these majestic creatures on my hike this morning. Nature is truly incredible! #wildlife #nature #hiking',
    likes: 324,
    comments: 45,
    timestamp: '5 HOURS AGO'
  },
  {
    id: '3',
    username: 'travelgram',
    userAvatar: 'https://source.unsplash.com/random/100x100/?travel',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80',
    caption: 'The colors of spring are everywhere! Just a reminder to stop and appreciate the little things in life. 🌸',
    likes: 513,
    comments: 32,
    timestamp: '1 DAY AGO'
  },
  {
    id: '4',
    username: 'mountain_climber',
    userAvatar: 'https://source.unsplash.com/random/100x100/?climber',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80',
    caption: 'Finally reached the summit after a 6-hour climb. The view was absolutely worth every step! #mountains #adventure #hiking',
    likes: 289,
    comments: 19,
    timestamp: '2 DAYS AGO'
  }
];

const Feed = () => {
  return (
    <div className="max-w-md mx-auto pt-16 pb-16 md:pb-4 md:pt-4 md:ml-16">
      {MOCK_POSTS.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
