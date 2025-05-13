
import React, { useState } from 'react';
import { Heart, MessageSquare, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { cn } from '../lib/utils';

export interface Post {
  id: string;
  username: string;
  userAvatar?: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [showFullCaption, setShowFullCaption] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const truncateCaption = (text: string) => {
    if (text.length <= 100) return text;
    return showFullCaption ? text : `${text.slice(0, 100)}...`;
  };

  return (
    <div className="bg-white border border-gray-200 rounded mb-6">
      {/* Post header */}
      <div className="flex items-center p-3">
        <Link to={`/profile/${post.username}`} className="flex items-center">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src={post.userAvatar} alt={post.username} />
            <AvatarFallback>
              <User size={16} />
            </AvatarFallback>
          </Avatar>
          <span className="font-medium text-sm">{post.username}</span>
        </Link>
      </div>

      {/* Post image */}
      <div className="relative">
        <img 
          src={post.image} 
          alt="Post content" 
          className="w-full object-cover max-h-[500px]" 
          onDoubleClick={handleLikeClick}
        />
      </div>

      {/* Post actions */}
      <div className="p-3">
        <div className="flex space-x-4">
          <button 
            onClick={handleLikeClick} 
            className="focus:outline-none flex items-center"
          >
            <Heart 
              size={24} 
              className={cn(
                "transition-colors",
                liked ? "fill-instagram-red text-instagram-red animate-heart-burst" : "text-instagram-black"
              )} 
            />
          </button>
          <button className="focus:outline-none flex items-center">
            <MessageSquare size={24} />
          </button>
        </div>

        {/* Likes count */}
        <div className="text-sm font-semibold mt-2">
          {likeCount} {likeCount === 1 ? 'like' : 'likes'}
        </div>

        {/* Caption */}
        <div className="mt-1 text-sm">
          <span className="font-semibold mr-2">{post.username}</span>
          <span>{truncateCaption(post.caption)}</span>
          {post.caption.length > 100 && (
            <button 
              className="text-instagram-gray ml-1 font-medium" 
              onClick={() => setShowFullCaption(!showFullCaption)}
            >
              {showFullCaption ? 'less' : 'more'}
            </button>
          )}
        </div>

        {/* Comments count */}
        <Link to={`/post/${post.id}`} className="text-instagram-gray text-sm mt-1 block">
          View all {post.comments} comments
        </Link>

        {/* Timestamp */}
        <div className="text-xs text-instagram-gray mt-1">
          {post.timestamp}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
