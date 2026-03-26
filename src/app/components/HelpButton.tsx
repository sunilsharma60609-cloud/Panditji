import { Headphones } from 'lucide-react';

export function HelpButton() {
  const handleHelpClick = () => {
    const message = encodeURIComponent('Hello, I need help with the game results.');
    const phoneNumber = '919310682542'; // +91 9310682542
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleHelpClick}
      className="fixed bottom-6 left-6 z-50 bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col items-center gap-2 px-4 py-3 group max-w-[140px]"
      aria-label="Need Help"
    >
      <div className="bg-white/20 rounded-full p-1.5">
        <img 
          src="https://ik.imagekit.io/oukr4eqci/Unnecessary%20image/pandit-ji-illustration-svg-download-png-2252413.webp" 
          alt="Pandit Ji"
          className="w-16 h-16 object-contain"
        />
      </div>
      <div className="flex flex-col items-center text-center gap-0.5">
        <span className="text-[10px] leading-tight font-medium opacity-90">दिल्ली बाजार...कर</span>
        <span className="text-[10px] leading-tight font-bold">03.00PM</span>
        <span className="text-[10px] leading-tight font-medium opacity-90">श्री गणेश-4.20 PM</span>
        <span className="text-[10px] leading-tight font-medium opacity-90">फरीदाबाद-5:55 PM</span>
        <span className="text-[10px] leading-tight font-medium opacity-90">गाजियाबाद-9:15 PM</span>
        <span className="text-[10px] leading-tight font-medium opacity-90">गली-11:15 PM</span>
        <span className="text-[10px] leading-tight font-medium opacity-90">दिसावर-4:00 AM</span>
        <span className="text-[10px] leading-tight font-bold mt-0.5">रोजली दिन विजेता</span>
        <span className="text-[10px] leading-tight font-bold">जोड़ीगेम</span>
        <span className="text-[10px] leading-tight font-medium opacity-90">10 से 15 मिनट में</span>
        <span className="text-[10px] leading-tight font-medium opacity-90">भुगतान फिजट</span>
        <span className="text-[10px] leading-tight font-bold">दिलवर</span>
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
    </button>
  );
}