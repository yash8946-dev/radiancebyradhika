import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const useSEO = (seoProps?: SEOProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const updateMetaTags = () => {
      // Determine language-specific content
      const isHindi = i18n.language === 'hi';
      
      // Get or set document language
      document.documentElement.lang = isHindi ? 'hi' : 'en';
      
      // Update base meta tags
      const title = seoProps?.title || (isHindi 
        ? 'राधिका - ब्राइडल मेकअप आर्टिस्ट बुरहानपुर | 300+ दुल्हन' 
        : 'Radhika - Bridal Makeup Artist Burhanpur | 300+ Brides');
      
      const description = seoProps?.description || (isHindi
        ? 'बुरहानपुर की टॉप ब्राइडल मेकअप आर्टिस्ट। फ्री ट्रायल, HD मेकअप, डेस्टिनेशन वेडिंग। शानदार लुक के लिए बुक करें। कॉल +91 9009064426'
        : 'Burhanpur\'s top bridal makeup artist. Free trials, HD makeup, destination weddings. Book stunning bridal & party looks. Call +91 9009064426');
      
      const keywords = seoProps?.keywords || (isHindi
        ? 'बुरहानपुर में मेकअप आर्टिस्ट, सर्वश्रेष्ठ मेकअप आर्टिस्ट बुरहानपुर, ब्राइडल मेकअप बुरहानपुर, प्रोफेशनल मेकअप आर्टिस्ट मध्य प्रदेश, दुल्हन मेकअप, मेकअप एक्सपर्ट खंडवा, मेकअप इंदौर, शादी की मेकअप, पार्टी मेकअप बुरहानपुर, मेहंदी लुक, हल्दी मेकअप, मेकअप आर्टिस्ट जलगांव, मेकअप आर्टिस्ट खामगांव, मेकअप आर्टिस्ट भुसावल, मेकअप आर्टिस्ट अकोला, मेकअप आर्टिस्ट अमरावती, मेकअप आर्टिस्ट शेगांव, मेकअप आर्टिस्ट बुलढाणा, मेकअप आर्टिस्ट रावेर, मेकअप आर्टिस्ट नेपानगर, मेकअप आर्टिस्ट असीरगढ़, मेकअप आर्टिस्ट जामनेर, मेकअप आर्टिस्ट चोपडा, मेकअप आर्टिस्ट एरंडोल, मेकअप आर्टिस्ट धारणगांव, makeup artist near me'
        : 'makeup artist Burhanpur, best makeup artist near me, bridal makeup Burhanpur, professional makeup artist MP, wedding makeup artist Madhya Pradesh, HD makeup Burhanpur, party makeup, makeup artist Khandwa, makeup artist Indore, makeup artist Jalgaon, makeup artist Khamgaon, makeup artist Bhusaval, makeup artist Akola, makeup artist Amravati, makeup artist Shegaon, makeup artist Buldana, makeup artist Raver, makeup artist Nepanagar, makeup artist Asirgarh, makeup artist Jamner, makeup artist Chopda, makeup artist Erandol, makeup artist Dharangaon, makeup artist nearby villages');

      const image = seoProps?.image || 'https://radiancebyradhika.lovable.app/og-image.jpg';
      const url = seoProps?.url || 'https://radiancebyradhika.lovable.app/';

      // Update document title
      document.title = title;

      // Update or create meta tags
      const updateOrCreateMeta = (name: string, content: string, isProperty = false) => {
        const attr = isProperty ? 'property' : 'name';
        let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
        
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute(attr, name);
          document.head.appendChild(element);
        }
        element.content = content;
      };

      // Standard meta tags
      updateOrCreateMeta('title', title);
      updateOrCreateMeta('description', description);
      updateOrCreateMeta('keywords', keywords);
      updateOrCreateMeta('og:locale', isHindi ? 'hi_IN' : 'en_IN', true);
      
      // Add alternate language link
      let alternateLink = document.querySelector('link[rel="alternate"]') as HTMLLinkElement;
      if (!alternateLink) {
        alternateLink = document.createElement('link');
        alternateLink.rel = 'alternate';
        document.head.appendChild(alternateLink);
      }
      alternateLink.hreflang = isHindi ? 'en' : 'hi';
      alternateLink.href = url;

      // Open Graph tags
      updateOrCreateMeta('og:title', isHindi 
        ? 'Radhika - बुरहानपुर की Makeup Artist | Bridal Makeup'
        : 'Radhika - Bridal Makeup Artist Burhanpur | Top Expert', true);
      
      updateOrCreateMeta('og:description', isHindi
        ? 'नमस्ते! मैं Radhika हूं, बुरहानपुर, MP की trusted makeup artist। मैंने 300+ brides और clients को beautiful बनाने का सुख पाया है। बुरहानपुर, खंडवा, जलगांव, भुसावल, अकोला, अमरावती और आस-पास के सभी गांव-क्षेत्रों में available!'
        : 'Hey there! I\'m Radhika, your trusted makeup artist in Burhanpur, MP. I\'ve had the joy of making 300+ brides and clients feel absolutely beautiful. Serving Burhanpur, Khandwa, Jalgaon, Bhusaval, Akola, Amravati and all nearby villages & areas!', true);
      
      updateOrCreateMeta('og:image', image, true);
      updateOrCreateMeta('og:url', url, true);
      updateOrCreateMeta('og:type', seoProps?.type || 'website', true);

      // Twitter tags
      updateOrCreateMeta('twitter:title', isHindi
        ? 'Radiance by Radhika - Professional Makeup Artist'
        : 'Radiance by Radhika - Professional Makeup Artist');
      
      updateOrCreateMeta('twitter:description', isHindi
        ? 'बुरहानपुर, MP की trusted makeup artist! Beautiful bridal & party looks बनाती हूं प्यार से। 300+ happy clients ✨'
        : 'Your trusted makeup artist in Burhanpur, MP! Creating beautiful bridal & party looks with love. 300+ happy clients & counting ✨');
      
      updateOrCreateMeta('twitter:image', image);
      updateOrCreateMeta('twitter:card', 'summary_large_image');
    };

    updateMetaTags();
  }, [i18n.language, seoProps]);
};
