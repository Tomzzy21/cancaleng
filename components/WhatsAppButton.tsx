import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/2348026833455?text=Hello%20Cancal%20Engineering,%20I%20would%20like%20to%20enquire%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 z-50 hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" fill="currentColor" />
      <span className="sr-only">Chat with us on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
