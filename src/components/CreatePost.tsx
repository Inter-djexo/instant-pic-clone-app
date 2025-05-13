
import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';

const CreatePost = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      setSelectedImage(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedImage) {
      toast({
        title: "No image selected",
        description: "Please select an image to upload",
        variant: "destructive"
      });
      return;
    }
    
    setUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      setUploading(false);
      toast({
        title: "Post created!",
        description: "Your post has been shared successfully"
      });
      // Reset form
      setSelectedImage(null);
      setCaption('');
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto pt-16 pb-16 md:pb-4 md:pt-4 md:ml-16 px-4">
      <h1 className="text-xl font-semibold mb-6">Create New Post</h1>
      
      <form onSubmit={handleSubmit}>
        {!selectedImage ? (
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center h-64">
            <Upload size={48} className="text-gray-400 mb-4" />
            <p className="text-sm text-gray-500 mb-4 text-center">
              Drag photos and videos here
            </p>
            <label className="cursor-pointer">
              <span className="bg-instagram-blue text-white px-4 py-2 rounded text-sm">
                Select from computer
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        ) : (
          <div className="relative">
            <img 
              src={selectedImage} 
              alt="Selected" 
              className="w-full rounded-md max-h-96 object-contain bg-black"
            />
            <button 
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-black bg-opacity-70 rounded-full p-1 text-white"
            >
              <X size={20} />
            </button>
          </div>
        )}
        
        {selectedImage && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Write a caption
            </label>
            <Textarea
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full"
              rows={4}
            />
          </div>
        )}
        
        <Button 
          type="submit"
          className="w-full mt-4 bg-instagram-blue hover:bg-blue-600"
          disabled={!selectedImage || uploading}
        >
          {uploading ? 'Posting...' : 'Share'}
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
