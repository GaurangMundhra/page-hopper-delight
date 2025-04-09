
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Gavel, Users, Building2, FileText, Ambulance, BanknoteIcon } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      title: "Criminal Law",
      icon: <Gavel className="h-12 w-12 mb-4 text-legal-blue" />,
      description: "Legal representation for those facing criminal charges, from misdemeanors to felonies.",
      subcategories: ["DUI Defense", "White Collar Crime", "Federal Charges", "Juvenile Defense"],
      link: "/services/criminal-law"
    },
    {
      title: "Family Law",
      icon: <Users className="h-12 w-12 mb-4 text-legal-blue" />,
      description: "Legal assistance for family matters including divorce, child custody, and adoption.",
      subcategories: ["Divorce", "Child Custody", "Adoption", "Domestic Violence Protection"],
      link: "/services/family-law"
    },
    {
      title: "Corporate Law",
      icon: <Building2 className="h-12 w-12 mb-4 text-legal-blue" />,
      description: "Legal services for businesses including formation, compliance, and corporate governance.",
      subcategories: ["Business Formation", "Compliance", "Mergers & Acquisitions", "Corporate Governance"],
      link: "/services/corporate-law"
    },
    {
      title: "Commercial Law",
      icon: <FileText className="h-12 w-12 mb-4 text-legal-blue" />,
      description: "Legal assistance for commercial transactions, contracts, and business disputes.",
      subcategories: ["Contract Law", "Commercial Litigation", "Intellectual Property", "Business Disputes"],
      link: "/services/commercial-law"
    },
    {
      title: "Personal Injury Law",
      icon: <Ambulance className="h-12 w-12 mb-4 text-legal-blue" />,
      description: "Legal representation for those injured due to negligence or wrongful acts.",
      subcategories: ["Car Accidents", "Workplace Injuries", "Medical Malpractice", "Product Liability"],
      link: "/services/personal-injury-law"
    },
    {
      title: "Bankruptcy Law",
      icon: <BanknoteIcon className="h-12 w-12 mb-4 text-legal-blue" />,
      description: "Legal assistance for individuals and businesses filing for bankruptcy protection.",
      subcategories: ["Chapter 7", "Chapter 11", "Chapter 13", "Creditor Representation"],
      link: "/services/bankruptcy-law"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-legal-dark text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Legal Practice Areas</h1>
            <p className="text-xl max-w-3xl mx-auto">Explore our comprehensive legal services across various practice areas.</p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link to={category.link} key={index}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center">{category.icon}</div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {category.subcategories.map((sub, idx) => (
                        <div key={idx} className="bg-legal-light p-2 rounded text-sm text-center">{sub}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-legal-blue py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Legal Assistance?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Our AI-powered platform can help you navigate complex legal issues across all practice areas.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <button className="bg-legal-gold text-black font-bold py-3 px-6 rounded hover:bg-opacity-80 transition-colors">
                  Get Legal Advice
                </button>
              </Link>
              <Link to="/services">
                <button className="bg-white text-legal-blue font-bold py-3 px-6 rounded hover:bg-opacity-80 transition-colors">
                  Explore Our Services
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
