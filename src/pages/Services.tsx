
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Legal Document Analysis",
      description: "Our AI can analyze legal documents, contracts, and agreements to identify potential issues and provide insights.",
      features: [
        "Contract analysis and risk assessment",
        "Legal document comparison",
        "Clause extraction and analysis",
        "Compliance verification"
      ]
    },
    {
      title: "Case Precedent Research",
      description: "Our platform can search through millions of case precedents to find relevant cases for your legal matter.",
      features: [
        "Comprehensive case law database",
        "Intelligent matching algorithm",
        "Jurisdiction-specific searches",
        "Automated case summaries"
      ]
    },
    {
      title: "Legal Q&A",
      description: "Get answers to your legal questions from our AI-powered system trained on legal texts, statutes, and case law.",
      features: [
        "24/7 availability",
        "Instant responses",
        "Jurisdiction-specific answers",
        "Plain language explanations"
      ]
    },
    {
      title: "Document Preparation",
      description: "Our AI can help draft legal documents based on your specific requirements and circumstances.",
      features: [
        "Customizable templates",
        "Jurisdiction-specific compliance",
        "Plain language drafting",
        "Document review and suggestions"
      ]
    }
  ];

  const legalAreas = [
    "Criminal Defense",
    "Family Law",
    "Corporate & Business Law",
    "Intellectual Property",
    "Real Estate Law",
    "Employment Law",
    "Immigration Law",
    "Personal Injury",
    "Tax Law",
    "Estate Planning",
    "Bankruptcy",
    "Civil Litigation"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section with different image */}
        <Hero 
          title="Our Legal Services" 
          subtitle="Explore how our AI-powered solutions can assist with your legal matters"
          backgroundImage="/lovable-uploads/9f2fb21d-09ce-4316-9357-03a99886178b.png"
        />

        {/* Main Services */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-2 text-center">AI-Powered Legal Solutions</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our platform leverages cutting-edge artificial intelligence to provide a range of legal services and solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Practice Areas */}
        <section className="container mx-auto px-4 py-16 bg-legal-light">
          <h2 className="text-3xl font-bold mb-8 text-center">Practice Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {legalAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium">{area}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">How Our Platform Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-legal-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Submit Your Query</h3>
              <p className="text-gray-600">Enter your legal question or upload relevant documents to our platform.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-legal-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">Our advanced AI analyzes your query and searches through vast databases of legal information.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-legal-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Receive Insights</h3>
              <p className="text-gray-600">Get detailed insights, relevant case precedents, and actionable recommendations.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
