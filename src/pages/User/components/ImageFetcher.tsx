import React, { useState, useEffect } from 'react';
import axios from 'axios';


interface ImageFetcherProps {
    avatar: string;
}
const ImageFetcher: React.FC<ImageFetcherProps> = ({ avatar }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
      const fetchImage = async () => {
          try {
              const response = await axios.get(avatar, { responseType: 'blob' });
              const imageUrl = URL.createObjectURL(response.data);
              setImageUrl(imageUrl);
          } catch (error) {
              console.error(error);
          }
      };
      fetchImage();
  }, [avatar]);

  return (
    <img id='user__avatar' src={imageUrl || 'https://via.placeholder.com/150'} alt="User Avatar" />
  );
}



export default ImageFetcher;
