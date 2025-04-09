
import React from 'react';
import { Phone, Mail } from 'lucide-react';

interface ContactInfoProps {
  phone?: string;
  email?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ 
  phone = "+123 456 7890", 
  email = "support@legalai.com" 
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center mb-8 md:space-x-8 space-y-2 md:space-y-0">
      <div className="flex items-center">
        <Phone className="h-5 w-5 text-red-500 mr-2" />
        <span className="font-medium">Contact 1: </span>
        <a href={`tel:${phone}`} className="ml-1 hover:text-legal-blue">{phone}</a>
      </div>
      <div className="flex items-center">
        <Mail className="h-5 w-5 text-legal-blue mr-2" />
        <span className="font-medium">Email: </span>
        <a href={`mailto:${email}`} className="ml-1 hover:text-legal-blue">{email}</a>
      </div>
    </div>
  );
};

export default ContactInfo;
