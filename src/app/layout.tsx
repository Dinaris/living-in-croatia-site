import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from "@vercel/analytics/react";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.livingincroatia.site"),
  title:
    "Living in Croatia - Ваша ежедневная энциклопедия для «Жизни в Хорватии»",
  description:
    "Закрытая группа с проверенной информацией обо всех аспектах жизни и переезда в Хорватию. Получите доступ к эксклюзивной информации от Татьяны Назаренко.",
  keywords:
    "Хорватия, переезд, жизнь в Хорватии, иммиграция, консультации, Татьяна Назаренко, Croatia, moving to Croatia, Croatia relocation, Croatia immigration, Croatia visa, Croatia residency, Croatia expat, Croatia living guide, Croatia business, Croatia work permit",
  authors: [{ name: "Tatyana Nazarenko" }],
  creator: "Tatyana Nazarenko",
  publisher: "Living in Croatia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.livingincroatia.site",
    languages: {
      "uk-UA": "https://www.livingincroatia.site?lang=uk",
      "ru-RU": "https://www.livingincroatia.site?lang=ru",
    },
  },
  category: "Travel & Immigration",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title:
      "Living in Croatia - Ваша ежедневная энциклопедия для «Жизни в Хорватии»",
    description:
      "Закрытая группа с проверенной информацией обо всех аспектах жизни и переезда в Хорватию.",
    type: "website",
    locale: "ru_RU",
    url: "https://www.livingincroatia.site",
    siteName: "Living in Croatia",
    images: [
      {
        url: "https://www.livingincroatia.site/Main.jpeg",
        width: 1200,
        height: 630,
        alt: "Tatyana Nazarenko - Expert on life in Croatia",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Living in Croatia - Ваша ежедневная энциклопедия для «Жизни в Хорватии»",
    description:
      "Закрытая группа с проверенной информацией обо всех аспектах жизни и переезда в Хорватию.",
    images: ["https://www.livingincroatia.site/Main.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
