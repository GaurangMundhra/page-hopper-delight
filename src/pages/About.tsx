
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-legal-dark text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">About Legal AI</h1>
            <p className="text-xl max-w-3xl">We are revolutionizing legal assistance with cutting-edge AI technology to provide accurate, efficient and accessible legal solutions.</p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-lg mb-6">
              At Legal AI, our mission is to democratize legal assistance by leveraging artificial intelligence to provide accurate, affordable, and accessible legal solutions to individuals and businesses alike. We believe that everyone should have access to quality legal guidance, regardless of their resources or background.
            </p>
            <p className="text-lg mb-6">
              We strive to bridge the gap between traditional legal services and modern technology, creating a platform that combines the expertise of seasoned legal professionals with the efficiency and scalability of AI systems.
            </p>
          </div>
        </section>

        <Separator />

        {/* Our Team */}
        <section className="py-16 container mx-auto px-4 bg-legal-light">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
                <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-gray-600">Chief Executive Officer</p>
              <p className="mt-2 text-sm">Former Supreme Court clerk with 15+ years of legal experience.</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
                <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
              <p className="mt-2 text-sm">AI specialist with a background in computational law.</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
                <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Elena Rodriguez</h3>
              <p className="text-gray-600">Chief Legal Officer</p>
              <p className="mt-2 text-sm">Former partner at a top law firm specializing in corporate law.</p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Accuracy</h3>
                <p>We are committed to providing accurate legal information and guidance through our AI systems, ensuring that users receive reliable assistance for their legal needs.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p>We believe that legal assistance should be accessible to everyone, regardless of their resources or background.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p>We continuously strive to innovate and improve our AI systems to provide the best possible legal assistance to our users.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ethics</h3>
                <p>We uphold the highest ethical standards in the development and deployment of our AI systems, ensuring that they are fair, transparent, and unbiased.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
