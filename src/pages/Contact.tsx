
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log('Form submitted');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-legal-dark text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">Get in touch with our legal experts for assistance with your legal matters.</p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" placeholder="johndoe@example.com" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                  <Input id="phone" placeholder="+1 (123) 456-7890" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <Input id="subject" placeholder="Legal consultation request" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea id="message" placeholder="Please describe your legal issue..." className="min-h-[120px]" required />
                </div>
                <div>
                  <Button type="submit" className="w-full bg-legal-blue text-white">Submit Request</Button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid gap-6">
                <Card>
                  <CardContent className="flex items-center p-6">
                    <Phone className="h-10 w-10 text-legal-blue mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p>+123 456 7890</p>
                      <p>Toll-free: 1-800-LEGAL-AI</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center p-6">
                    <Mail className="h-10 w-10 text-legal-blue mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p>support@legalai.com</p>
                      <p>info@legalai.com</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center p-6">
                    <MapPin className="h-10 w-10 text-legal-blue mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p>123 Legal Street</p>
                      <p>Lawville, NY 10001</p>
                      <p>United States</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center p-6">
                    <Clock className="h-10 w-10 text-legal-blue mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-legal-light py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">How quickly will I receive a response?</h3>
                <p className="text-gray-600">We typically respond to all inquiries within 24-48 business hours.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Do you offer free consultations?</h3>
                <p className="text-gray-600">Yes, we offer a free 15-minute initial consultation to assess your legal needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Is my information kept confidential?</h3>
                <p className="text-gray-600">Absolutely. All information shared with our platform is protected by attorney-client privilege and our strict privacy policy.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">What areas of law do you cover?</h3>
                <p className="text-gray-600">We cover a wide range of legal areas including criminal law, family law, corporate law, commercial law, personal injury, and bankruptcy.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
