
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title = "Legal AI Assistance", 
  subtitle = "Our AI analyzes legal cases with precision.",
  backgroundImage = "/image.png" 
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Query submitted:', query);
    setQuery('');
  };

  return (
    <div className="relative w-full bg-center bg-cover h-[500px]" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-8">{subtitle}</p>
        
        <form onSubmit={handleSubmit} className="flex w-full max-w-md space-x-2">
          <Input
            type="text"
            placeholder="Ask a legal question..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-white text-black"
          />
          <Button type="submit" className="bg-legal-gold text-black hover:bg-legal-gold/80">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
