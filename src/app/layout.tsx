import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title:
    "Living in Croatia - Ваша ежедневная энциклопедия для «Жизни в Хорватии»",
  description:
    "Закрытая группа с проверенной информацией обо всех аспектах жизни и переезда в Хорватию. Получите доступ к эксклюзивной информации от Татьяны Назаренко.",
  keywords:
    "Хорватия, переезд, жизнь в Хорватии, иммиграция, консультации, Татьяна Назаренко",
  authors: [{ name: "Tatyana Nazarenko" }],
  openGraph: {
    title:
      "Living in Croatia - Ваша ежедневная энциклопедия для «Жизни в Хорватии»",
    description:
      "Закрытая группа с проверенной информацией обо всех аспектах жизни и переезда в Хорватию.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Living in Croatia - Ваша ежедневная энциклопедия для «Жизни в Хорватии»",
    description:
      "Закрытая группа с проверенной информацией обо всех аспектах жизни и переезда в Хорватию.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
