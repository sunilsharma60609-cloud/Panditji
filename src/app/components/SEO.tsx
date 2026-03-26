import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export function SEO({
  title = 'Trusted Satta Adda | Satta King - Live Results & Updates',
  description = 'Trusted Satta Adda - Your #1 source for Satta King live results, record charts, Desawar, Gali, Faridabad, Ghaziabad results. Get instant updates on WhatsApp +91 9310682542. सट्टा किंग रिजल्ट सबसे पहले यहाँ देखें।',
  keywords = 'satta king, satta, satta result, satta king result, desawar result, gali result, faridabad result, ghaziabad result, satta record chart, satta king chart, delhi bazar, shree ganesh satta, live satta result, satta adda, panditji satta, सट्टा किंग, सट्टा रिजल्ट, दिसावर रिजल्ट, गली रिजल्ट, फरीदाबाद रिजल्ट, गाजियाबाद रिजल्ट',
  ogTitle = 'Trusted Satta Adda | Satta King - Live Results',
  ogDescription = 'Get fastest Satta King live results, record charts & updates. Desawar, Gali, Faridabad, Ghaziabad. Join WhatsApp for instant notifications.',
  ogImage = 'https://ik.imagekit.io/oukr4eqci/Unnecessary%20image/pandit-ji-illustration-svg-download-png-2252413.webp',
}: SEOProps) {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Trusted Satta Adda",
    "alternateName": "Satta King",
    "url": "https://panditjisatta.com/",
    "description": description,
    "inLanguage": ["hi", "en"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://panditjisatta.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trusted Satta Adda",
    "url": "https://panditjisatta.com/",
    "logo": ogImage,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9310682542",
      "contactType": "Customer Service",
      "availableLanguage": ["Hindi", "English"]
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://panditjisatta.com/" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://panditjisatta.com/" />
      <meta property="twitter:title" content={ogTitle} />
      <meta property="twitter:description" content={ogDescription} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Hindi, English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="author" content="Satta Adda" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#22C55E" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://panditjisatta.com/" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
    </Helmet>
  );
}