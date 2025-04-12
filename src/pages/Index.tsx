
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import NewsCard from '@/components/NewsCard';
import ContactInfo from '@/components/ContactInfo';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const legalCategories = [
    { title: "Criminal Law", link: "/services/criminal-law" },
    { title: "Family Law", link: "/services/family-law" },
    { title: "Corporate Law", link: "/services/corporate-law" },
    { title: "Commercial Law", link: "/services/commercial-law" },
    { title: "Personal Injury Law", link: "/services/personal-injury-law" },
    { title: "Bankruptcy Law", link: "/services/bankruptcy-law" }
  ];

  const latestNews = [
    { 
      title: "New Data Privacy Law Enforced", 
      content: "A new data privacy law has been enacted to protect consumer information. Companies must comply with stricter data regulations.",
      image: "/privacy_law.avif",
      link: "/news/data-privacy-law"
    },
    { 
      title: "Employment Laws Revised", 
      content: "The government has introduced amendments to employment laws, ensuring better worker protection and benefits.",
      image: "/employmnet_law.avif",
      link: "/news/employment-laws"
    },
    { 
      title: "Taxation Law Updates", 
      content: "A new tax reform bill has been passed, impacting both individual and corporate tax rates. Experts suggest businesses adapt accordingly.",
      image: "/taxation_law.avif",
      link: "/news/taxation-law"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section>
          <Hero />
        </section>

        {/* Contact Info Section */}
        <section className="container mx-auto px-4 py-4">
          <ContactInfo />
        </section>

        {/* Legal Categories Section */}
        <section className="container mx-auto px-4 py-4">
          <h2 className="text-3xl font-bold text-center mb-8">Legal Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalCategories.map((category, index) => (
              <CategoryCard key={index} title={category.title} link={category.link} />
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Latest News Section */}
        <section className="container mx-auto px-4 py-4 ">
          <h2 className="text-3xl font-bold text-center mb-8">Latest Legal News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <NewsCard 
                key={index} 
                title={news.title} 
                content={news.content}
                image={news.image}
                link={news.link}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
