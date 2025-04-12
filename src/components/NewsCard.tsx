
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Button } from './ui/button';

interface NewsCardProps {
  title: string;
  content: string;
  image: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, content, image, link }) => {
  // Determine if the image path is absolute (starts with http or /) or relative
  const imageSrc = image.startsWith('http') || image.startsWith('/') 
    ? image 
    : `/src/assets/images/${image}`;
    
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in opacity-0">
      <div className="h-48 overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-gray-600">{content}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={link}>
          <Button className="bg-legal-blue text-white hover:bg-legal-blue/80">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
