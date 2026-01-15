import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { JetBrains_Mono } from 'next/font/google';
import { routing } from '@/libs/I18nRouting';
import '@/styles/globals.css';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/sections/footer';
import { SystemLoaderWrapper } from '@/components/ui/SystemLoaderWrapper';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`scroll-smooth snap-y snap-proximity ${jetbrainsMono.variable}`}>
      <body className="bg-deep-navy text-white antialiased selection:bg-electric-cyan selection:text-deep-navy">
        <SystemLoaderWrapper />
        <NextIntlClientProvider>
          <Navbar />
          <main className="min-h-screen">
            {props.children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
