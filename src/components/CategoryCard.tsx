
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';

interface CategoryCardProps {
  title: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, link }) => {
  return (
    <Link to={link}>
      <Card className="hover:shadow-lg transition-shadow border border-gray-200 animate-fade-in opacity-0">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-center">{title}</h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
