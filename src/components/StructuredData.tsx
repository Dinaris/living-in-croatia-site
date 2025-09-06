export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tatyana Nazarenko",
    jobTitle: "Croatia Living Expert",
    description:
      "Expert on life and relocation to Croatia with 3+ years of experience",
    url: "https://www.livingincroatia.site",
    image: "https://www.livingincroatia.site/Main.jpeg",
    sameAs: [
      "https://www.youtube.com/@livingincroatia",
      "https://www.instagram.com/tatyana_nazarenko_hr/",
      "https://www.tiktok.com/@tatyananazarenkohr",
      "https://t.me/TatyanaNazarenkoHr",
    ],
    knowsAbout: [
      "Croatia immigration",
      "Croatia visa process",
      "Living in Croatia",
      "Croatia business setup",
      "Croatia real estate",
      "Croatia healthcare",
      "Croatia education",
      "Croatia banking",
    ],
    offers: {
      "@type": "Service",
      name: "Croatia Living Consultation",
      description: "Personal consultation about living and moving to Croatia",
      provider: {
        "@type": "Person",
        name: "Tatyana Nazarenko",
      },
      areaServed: "Croatia",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://t.me/TatyanaNazarenkoHr",
        serviceName: "Telegram Consultation",
      },
    },
    worksFor: {
      "@type": "Organization",
      name: "Living in Croatia",
      url: "https://www.livingincroatia.site",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
