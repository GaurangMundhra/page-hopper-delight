
import React from "react";
import { Link } from "react-router-dom";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-20">
          <h1 className="text-6xl font-bold text-legal-dark mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-6">Page Not Found</p>
          <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild className="bg-legal-blue">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
