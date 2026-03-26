import { Button } from './ui/button';
import { useState } from 'react';
import { WhatsAppPopup } from './WhatsAppPopup';

export function Header() {
  const [whatsappPopupOpen, setWhatsappPopupOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-green-100 rounded-lg p-1">
                <img 
                  src="https://ik.imagekit.io/oukr4eqci/Unnecessary%20image/pandit-ji-illustration-svg-download-png-2252413.webp" 
                  alt="Pandit Ji"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <span className="text-xl text-slate-900 font-bold hidden sm:block">Satta Adda</span>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={() => setWhatsappPopupOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white shadow-md"
            >
              Join Updates
            </Button>
          </div>
        </div>
      </header>
      
      <WhatsAppPopup isOpen={whatsappPopupOpen} onClose={() => setWhatsappPopupOpen(false)} />
    </>
  );
}