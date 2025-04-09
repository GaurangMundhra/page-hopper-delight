
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const News = () => {
  const newsArticles = [
    {
      title: "New Data Privacy Law Enforced",
      date: "April 5, 2025",
      category: "Privacy Law",
      summary: "A new data privacy law has been enacted to protect consumer information. Companies must comply with stricter data regulations.",
      content: "The government has passed a comprehensive data privacy law that will significantly impact how businesses collect, store, and process personal data. The law aims to enhance consumer privacy protections while placing new compliance requirements on companies. Key provisions include mandatory breach notifications within 72 hours, enhanced consent requirements for data collection, and significant penalties for non-compliance that can reach up to 4% of global annual revenue.",
      image: "/lovable-uploads/e855fe90-0871-4945-971c-7d0acd4ab196.png"
    },
    {
      title: "Employment Laws Revised",
      date: "March 28, 2025",
      category: "Employment Law",
      summary: "The government has introduced amendments to employment laws, ensuring better worker protection and benefits.",
      content: "A series of amendments to the national employment law have been passed, focusing on worker protections and benefits. Notable changes include expanded paid leave provisions, stronger anti-discrimination protections, and new regulations regarding remote work arrangements. Employers have until October 2025 to update their policies and procedures to align with these new requirements. Industry experts suggest these changes will particularly impact gig economy workers and contractors who may now qualify for benefits previously reserved for traditional employees.",
      image: "/lovable-uploads/9f2fb21d-09ce-4316-9357-03a99886178b.png"
    },
    {
      title: "Taxation Law Updates",
      date: "March 15, 2025",
      category: "Tax Law",
      summary: "A new tax reform bill has been passed, impacting both individual and corporate tax rates. Experts suggest businesses adapt accordingly.",
      content: "The legislature has approved a comprehensive tax reform package that will reshape both individual and corporate taxation starting next fiscal year. Key changes include modified tax brackets for individuals, new deduction limitations, and incentives for sustainable business practices. Corporate tax rates will see a modest reduction, but this is offset by the elimination of several previously available credits. Tax professionals are advising businesses to review their strategies before the end of the quarter to optimize their positions under the new framework.",
      image: "/lovable-uploads/e855fe90-0871-4945-971c-7d0acd4ab196.png"
    },
    {
      title: "Supreme Court Ruling on Digital Privacy",
      date: "March 10, 2025",
      category: "Constitutional Law",
      summary: "The Supreme Court has issued a landmark ruling on digital privacy rights, expanding Fourth Amendment protections to cloud storage.",
      content: "In a 6-3 decision, the Supreme Court has ruled that personal data stored in cloud services receives the same Fourth Amendment protections as physical documents in one's home. This decision requires law enforcement agencies to obtain specific warrants to access cloud data, overturning previous precedents that treated remotely stored data differently from local storage. Legal experts suggest this ruling will have far-reaching implications for digital privacy cases and may prompt legislative action to clarify standards for digital evidence collection.",
      image: "/lovable-uploads/9f2fb21d-09ce-4316-9357-03a99886178b.png"
    },
    {
      title: "New Regulations for Autonomous Vehicle Testing",
      date: "February 28, 2025",
      category: "Technology Law",
      summary: "Federal agencies have released new regulations governing autonomous vehicle testing and deployment on public roads.",
      content: "A comprehensive regulatory framework for autonomous vehicle testing and deployment has been released by transportation authorities. The framework establishes national standards for safety testing, data collection, and accident reporting while preempting some state-level restrictions. Manufacturers will need to submit detailed safety assessment reports and demonstrate specific capability benchmarks before vehicles can be tested on public roads. Industry representatives have generally welcomed the clarity provided by the new regulations, though some consumer advocacy groups argue the rules don't go far enough in protecting public safety.",
      image: "/lovable-uploads/e855fe90-0871-4945-971c-7d0acd4ab196.png"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-legal-dark text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Legal News & Updates</h1>
            <p className="text-xl max-w-3xl">Stay informed with the latest developments in law and legal technology.</p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4">
            <Input 
              placeholder="Search news articles..." 
              className="md:max-w-xs"
            />
            <select className="h-10 px-3 py-2 rounded-md border border-input bg-background">
              <option value="">All Categories</option>
              <option value="Privacy Law">Privacy Law</option>
              <option value="Employment Law">Employment Law</option>
              <option value="Tax Law">Tax Law</option>
              <option value="Constitutional Law">Constitutional Law</option>
              <option value="Technology Law">Technology Law</option>
            </select>
            <Button>Search</Button>
          </div>
        </section>

        <Separator className="my-4" />

        {/* News Articles */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid gap-8">
            {newsArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 h-60 md:h-auto">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{article.date}</span>
                        <span className="text-xs bg-legal-blue/10 text-legal-blue px-2 py-1 rounded-full">{article.category}</span>
                      </div>
                      <CardTitle className="text-2xl mt-2">{article.title}</CardTitle>
                      <CardDescription className="text-lg">{article.summary}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3">{article.content}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">Read Full Article</Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button variant="outline" className="bg-legal-blue text-white">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-legal-light py-12 mt-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Legal Newsletter</h2>
            <p className="mb-6 max-w-2xl mx-auto">Stay updated with the latest legal news, case analyses, and regulatory changes delivered to your inbox.</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" type="email" className="flex-grow" />
              <Button className="bg-legal-blue text-white">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
