import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { BlueprintLogo } from '@/components/visuals/BlueprintLogo';

type IAboutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IAboutProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function About(props: IAboutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  return (
    <div className="container mx-auto px-8 md:px-16 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Über Uns</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">{t('about_paragraph')}</p>

        {/* Blueprint Logo Showcase */}
        <div className="w-full bg-deep-navy/50 rounded-2xl border border-electric-cyan/20 p-12 flex items-center justify-center mb-12">
          <BlueprintLogo size={300} />
        </div>

        <div className="mt-2 text-center text-sm">
          {`${t('translation_powered_by')} `}
          <a
            className="text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://l.crowdin.com/next-js"
          >
            Crowdin
          </a>
        </div>

        <a href="https://l.crowdin.com/next-js" className="block text-center">
          <Image
            className="mx-auto mt-2"
            src="/assets/images/crowdin-dark.png"
            alt="Crowdin Translation Management System"
            width={128}
            height={26}
          />
        </a>
      </div>
    </div>
  );
};
