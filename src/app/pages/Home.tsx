import { Button } from '../components/ui/button';
import { SEO } from '../components/SEO';

export function Home() {
  const whatsappNumber = "919310682542";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-white">
      <SEO />
      {/* Main Header */}
      <div className="bg-yellow-400 py-3 border-b-4 border-black">
        <h1 className="text-center text-4xl sm:text-5xl font-bold text-black tracking-wide">
          SATTA KING
        </h1>
      </div>

      {/* Disclaimer Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-3 px-4 border-b-2 border-black">
        <p className="text-center text-white text-sm sm:text-base font-semibold">
          कृपया ध्यान दें, लीक गेम के नाम पर किसी को कोई पैसा न दें, ना पहले ना बाद मे -धन्यवाद
        </p>
      </div>

      {/* Satta King Disclaimer */}
      <div className="bg-white py-4 px-4 border-b-2 border-slate-200">
        <h3 className="text-center text-lg font-bold text-slate-900 mb-2">Satta king Disclaimer</h3>
        <p className="text-center text-sm text-slate-700 leading-relaxed max-w-5xl mx-auto">
          प्रिय उपयोगकर्ता, यह इ ेवल मनोरंजन के लिए बनाई गई है। हम आपको सूचित करना चाहते हैं कि हम और हमारी साइट (PANDITJISATTA.COM) किसी भी ऑनलाइन जुए की गतिविधि में शामिल नहीं हैं। वेबसाइट पर मौजूद सभी डेटा केवल रिकॉर्ड हैं। हम किसी भी देश के नियमों और विनियमों को नुकसान नहीं पहुँचाना चाहते। हम आपको यह भी सूचित करना चाहते हैं कि हो सकता है कि आपके देश में सट्टा किंग खेलना कानूनी न हो, इसलिए बेहतर होगा कि आप आज ही इसे छोड़ दें। किसी भी लाभ या हानि के लिए केवल आप ही ज़िम्मेदार होंगे। धन्यवाद
        </p>
      </div>

      {/* Orange Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-6 border-b-4 border-black">
        <div className="text-center">
          <p className="text-white text-xl sm:text-2xl font-bold mb-2">Best site satta result</p>
          <p className="text-white text-3xl sm:text-4xl font-bold tracking-wider">
            WWW.PANDITJISATTA.COM
          </p>
        </div>
      </div>

      {/* Live Result Notice */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-purple-600 text-3xl sm:text-4xl font-bold mb-4">SATTA KING LIVE RESULTS</h2>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 mb-6">
            <p className="text-white text-2xl font-bold mb-4">📱 Get Live Results Instantly!</p>
            <p className="text-white text-lg mb-4">
              सभी गेम के रिजल्ट सबसे पहले पाने के लिए
            </p>
            <div className="space-y-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-yellow-300 text-xl font-bold mb-2">📲 WhatsApp Group</p>
                <p className="text-white text-base">तुरंत अपडेट पाने के लिए व्हाट्सएप ग्रुप ज्वाइन करें</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-yellow-300 text-xl font-bold mb-2">📢 Telegram Channel</p>
                <p className="text-white text-base">सुपर फास्ट रिजल्ट के लिए टेलीग्राम चैनल ज्वाइन करें</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 inline-block px-6 py-3 rounded-lg">
            <p className="text-white text-xl font-bold">SATTA KING RECORD CHART</p>
          </div>
          <div className="mt-6 inline-block">
            <img 
              src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=your-id" 
              alt="DMCA Protected"
              className="h-12 mx-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>

      {/* Promotional Banner - Static Content */}
      <div className="bg-gradient-to-br from-blue-400 to-blue-500 py-12 px-4 border-y-4 border-orange-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            🔥 WWW.PANDITJISATTA.COM 🔥
          </h2>
          <p className="text-xl font-bold text-white mb-6">आपका भरोसेमंद सट्टा किंग रिजल्ट पोर्टल</p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
            <p className="text-white text-2xl font-bold mb-4">
              ⚡ सुपर फास्ट रिजल्ट ⚡
            </p>
            <p className="text-white text-lg font-semibold mb-3">
              सभी गेम के रिजल्ट सबसे पहले यहाँ देखें
            </p>
            <p className="text-yellow-300 text-xl font-bold mb-2">✅ 100% सही और सटीक रिजल्ट</p>
            <p className="text-white text-lg font-semibold">📊 सभी गेम का कम्पलीट रिकॉर्ड चार्ट</p>
          </div>

          <div className="bg-white/20 rounded-lg p-6 mb-6">
            <p className="text-white text-xl font-bold mb-3">📱 अपडेट के लिए व्हाट्सएप पर जुड़ें</p>
            <p className="text-yellow-300 text-lg font-semibold mb-3">
              रिजल्ट की तुरंत जानकारी पाने के लिए हमसे संपर्क करें
            </p>
            <p className="text-white text-2xl font-bold mb-2">+91 9310682542</p>
            <p className="text-white text-sm font-semibold">भरोसा आपका • ईमानदारी हमारी</p>
          </div>

          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-8 py-3 rounded-full transition-colors shadow-lg"
          >
            📲 WHATSAPP NOW
          </a>
        </div>
      </div>

      {/* Pankaj Bhai Section - White Background */}
      <div className="bg-white py-12 px-4 border-b-4 border-slate-300">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            📊 सट्टा किंग रिकॉर्ड चार्ट 📊
          </h2>
          <p className="text-xl font-bold text-slate-900 mb-2">PANDITJISATTA.COM</p>
          <p className="text-slate-600 text-sm mb-6">▬▭▬▭▬▭▬▭▬▭▬▭▬</p>

          <div className="bg-slate-100 rounded-lg p-6 mb-6">
            <p className="text-slate-900 text-xl font-bold mb-4">
              ✨ हमारी विशेषताएं ✨
            </p>
            <div className="space-y-3 text-slate-800 text-base font-semibold">
              <p>🎯 सभी गेम के सटीक रिजल्ट</p>
              <p>📈 कम्पलीट रिकॉर्ड चार्ट</p>
              <p>⚡ सुपर फास्ट अपडेट</p>
              <p>📱 मोबाइल फ्रेंडली वेबसाइट</p>
              <p>🔔 व्हाट्सएप पर तुरंत नोटिफिकेशन</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-amber-200 rounded-lg p-4 mb-4 border-2 border-amber-400">
            <p className="text-slate-900 font-bold text-lg mb-2">📞 व्हाट्सएप पर जुड़ें</p>
            <p className="text-slate-800 font-semibold mb-3">
              रिजल्ट की तुरंत अपडेट पाने के लिए हमसे संपर्क करें
            </p>
            <p className="text-slate-900 text-2xl font-bold mb-2">+91 9310682542</p>
            <p className="text-slate-700 text-sm font-semibold">भरोसा आपका • ईमानदारी हमारी</p>
          </div>

          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-400 hover:bg-cyan-500 text-white font-bold text-lg px-8 py-3 rounded-full transition-colors shadow-lg"
          >
            📲 WhatsApp Now
          </a>
        </div>
      </div>

      {/* Scrolling Notice Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-3 px-4 overflow-hidden">
        <div className="text-white text-sm font-semibold text-center">
          फीस गेम पास के बाद फरीदाबाद गाजियाबाद गली दिसावर 📢 भरोसा आपका काम हमारा 👉 गेम खेलना दिलदार लोगों का काम है 👉🏿 जीतता वही है जिसे खेलना पसंद है। 🎗️अगर आपका सत्ता खेल खेल के नुकसान हो गया है । आज ही संपर्क करें । और नुकसान को कवर करे। धन्यवाद
        </div>
      </div>

      {/* Additional Notice Banner */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-950 py-4 px-4 border-y-2 border-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white text-xl font-bold mb-3">
            +91 9310682542
          </p>
          <p className="text-white text-base font-semibold mb-2">
            👨🏻‍💻 आपका अपना भाई पवन शुक्ला
          </p>
          <p className="text-yellow-300 text-base font-bold mb-2">
            गेम लेने के लिए व्हाट्सएप पे क्लिक करे
          </p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-400 hover:bg-cyan-500 text-white font-bold text-base px-6 py-2 rounded-full transition-colors"
          >
            WhatsApp Now
          </a>
        </div>
      </div>

      {/* Record Charts Section */}
      <div className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Orange Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-4 mb-6 rounded-lg">
            <h2 className="text-center text-white text-2xl sm:text-3xl font-bold">
              SATTA KING RECORD CHART 2026
            </h2>
          </div>

          {/* Record Chart Links 2026 */}
          <div className="space-y-3 mb-8">
            <div className="block bg-white border-2 border-slate-900 rounded-full py-3 px-6 text-center">
              <span className="text-slate-900 font-bold text-lg">DELHI BAZAR RECORD CHART 2026</span>
            </div>
            <div className="block bg-white border-2 border-slate-900 rounded-full py-3 px-6 text-center">
              <span className="text-slate-900 font-bold text-lg">DESAWAR RECORD CHART 2026</span>
            </div>
            <div className="block bg-white border-2 border-slate-900 rounded-full py-3 px-6 text-center">
              <span className="text-slate-900 font-bold text-lg">FARIDABAD RECORD CHART 2026</span>
            </div>
            <div className="block bg-white border-2 border-slate-900 rounded-full py-3 px-6 text-center">
              <span className="text-slate-900 font-bold text-lg">GALI RECORD CHART 2026</span>
            </div>
            <div className="block bg-white border-2 border-slate-900 rounded-full py-3 px-6 text-center">
              <span className="text-slate-900 font-bold text-lg">GHAZIABAD RECORD CHART 2026</span>
            </div>
            <div className="block bg-white border-2 border-slate-900 rounded-full py-3 px-6 text-center">
              <span className="text-slate-900 font-bold text-lg">SHREE GANESH RECORD CHART 2026</span>
            </div>
            <div className="block bg-white border-2 border-slate-900 rounded-full py-3 px-6 text-center">
              <span className="text-slate-900 font-bold text-lg">SHRI KRISHNA RECORD CHART 2026</span>
            </div>
          </div>

          {/* Orange Header 2025 */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-4 mb-6 rounded-lg">
            <h2 className="text-center text-white text-2xl sm:text-3xl font-bold">
              SATTA KING RECORD CHART 2025
            </h2>
          </div>

          {/* Record Chart Links 2025 */}
          <div className="space-y-3 mb-8">
            <div className="block bg-white border-2 border-slate-900 rounded-full py-3 px-6 text-center">
              <span className="text-slate-900 font-bold text-lg">DELHI BAZAR RECORD CHART 2025</span>
            </div>
            <div className="block bg-white border-2 border-slate-900 rounded-full py-3 px-6 text-center">
              <span className="text-slate-900 font-bold text-lg">DESAWAR RECORD CHART 2025</span>
            </div>
            <div className="block bg-white border-2 border-slate-900 rounded-full py-3 px-6 text-center">
              <span className="text-slate-900 font-bold text-lg">FARIDABAD RECORD CHART 2025</span>
            </div>
            <div className="block bg-white border-2 border-slate-900 rounded-full py-3 px-6 text-center">
              <span className="text-slate-900 font-bold text-lg">GALI RECORD CHART 2025</span>
            </div>
            <div className="block bg-white border-2 border-slate-900 rounded-full py-3 px-6 text-center">
              <span className="text-slate-900 font-bold text-lg">GHAZIABAD RECORD CHART 2025</span>
            </div>
            <div className="block bg-white border-2 border-slate-900 rounded-full py-3 px-6 text-center">
              <span className="text-slate-900 font-bold text-lg">SHREE GANESH RECORD CHART 2025</span>
            </div>
            <div className="block bg-white border-2 border-slate-900 rounded-full py-3 px-6 text-center">
              <span className="text-slate-900 font-bold text-lg">SHRI KRISHNA RECORD CHART 2025</span>
            </div>
          </div>

          {/* Monthly Record Chart Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-4 mb-6 rounded-lg">
            <h2 className="text-center text-white text-2xl sm:text-3xl font-bold">
              MONTHLY SATTA RECORD CHART
            </h2>
          </div>

          {/* All Game Mix Record Chart */}
          <div className="block bg-white border-2 border-slate-900 rounded-lg py-3 px-6 text-center mb-6">
            <span className="text-slate-900 font-bold text-lg">ALL GAME MIX RECORD CHART</span>
          </div>

          {/* Hindi Notice Cards */}
          <div className="space-y-4 mb-6">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 border-2 border-slate-900 rounded-lg p-4">
              <p className="text-white text-center mb-3">
                अपनी गेम का रिजल्ट लगवाने के लिए फॉन करें 👇👇👇
              </p>
              <div className="text-center">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-base px-6 py-2 rounded-full transition-colors"
                >
                  ADMIN TELL
                </a>
              </div>
            </div>

            <div className="bg-white border-4 border-red-500 rounded-lg p-4">
              <p className="text-red-600 text-center font-semibold mb-3">
                सट्टा फ्लाट रिजल्ट धारक ज्यादा सम से पहले रिजल्ट देखने के लिए ज्यादा करों हमारे फ्लेंट पर 👇👇👇
              </p>
              <div className="text-center">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-base px-6 py-2 rounded-full transition-colors"
                >
                  JOIN TELLY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-white py-8 px-4 border-t-4 border-orange-500">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-2xl font-bold text-slate-900 mb-6">
            About WWW.PANDITJISATTA.COM (SATTA KING)
          </h3>
          
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p className="text-slate-900 font-semibold">
              PANDITJISATTA.COM में आपका स्वागत है हमारी वेबसाइट बाजार की अग्रणी वेबसाइटों में से एक है, हमारी साइट 2018 में सभी सट्टा किंग गेम्स और सट्टा किंग रिकॉर्ड चार्ट के परिणाम दिखाने के लिए विकसित की गई है, हम किसी भी सट्टा खेल में शामिल नहीं हैं गतिविधि। हमारी वेबसाइट में हमारे उपयोगकर्ता सट्टा परिणाम सुपर फास्ट प्राप्त कर सकते हैं जो आपको अपने मोबाइल में तेजी से सट्टा परिणाम प्राप्त करने में मदद करते हैं, आप हमारे सट्टा राजा रिकॉर्ड चार्ट पृष्ठ में सट्टा राजा बाजार के सभी सर्वश्रेष्ठ गेम का सट्टा रिकॉर्ड पा सकते हैं जो बहुत उपयोगकर्ता के अनुकूल है और आरामदायक।
            </p>
            
            <p>
              इस पृष्ठ में आप राजकोट सट्टा राजा, बहादुरगढ़ सट्टा, चारमीनार सट्टा राजा, देसावर, फरीदाबाद, गाजियाबाद, गली, दिसावर दिवस, मैसूर सट्टा राजा, श्री हरि सट्टा, मैक्स गोल्ड, जैसे सट्टा बाजार के सभी सर्वश्रेष्ठ खेलों का रिकॉर्ड चार्ट पा सकते हैं। शेर-ए-अफगान, राजश्री सट्टा, गोल्डन सट्टा, सुंदरम, अपस्किंग सट्टा, पेशवा सट्टा किंग, ताज सट्टा, हरियाणा, हिंदुस्तान, शोलापुर, चेतक, फैज़ना सत्त, पवनपुत्र सट्टा, श्री गणेश, अरब काउंटी, ड्रीम 7, यूपी सट्टा किंग। , गुड़गांव, पंजाब दिवस, नर्मदा, मुंबई दिवस, शालीमार, स्वराज सट्टा किंग, दिसावर 365, इलाहाबाद, मीना बाजार, तेजस, सट्टा किंग, लकी 7, मिर्जापुर, कलश, सट्टा बाजार, गुजरात मार्केट, सुपर सट्टा और बहुत अधिक प्रसिद्ध खेल सट्टाबाजार का।
            </p>

            <p>
              हम अपने उपयोगकर्ता को अपना गेम परिणाम अपडेट करने की अनुमति देते हैं। यदि आप हमारी साइट में अपना सट्टा किंग गेम जोड़ना चाहते हैं, तो आपको साइट व्यवस्थापक से संपर्क करना होगा। हमारी वेबसाइट में आप सट्टा लीक नंबर के बारे में भी पोस्ट पा सकते हैं, इन पोस्टों को अलग-अलग सट्टेबाजों द्वारा पोस्ट किया गया है, जिनके पास पुराने सट्टा रिकॉर्ड चार्ट के लिए आगामी जूट का अनुमान लगाने और निकालने में एक व्यापक अनुभव है।
            </p>

            <p>
              ये विशेषज्ञ आपको किसी भी गेम को जीतने में मदद कर सकते हैं। आप उनसे संपर्क करके सट्टा राजा के किसी भी खेल को भी जीत सकते हैं। आप हमारी वेबसाइट के सट्टा लीक नंबर पेज में इन सभी विशेषज्ञों को पा सकते हैं।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}