import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/logo.png';
import { getDictionary, Locale } from '@/dictionaries';

const WelcomePage = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;

  // Localized texts
  const { welcome_page, privacy_policy, terms_of_use } = await getDictionary(lang);
  const { title, description, get_started_button, learn_more_button } = welcome_page;

  return (
    <div className="flex grow flex-col text-center">
      <main className="flex grow flex-col items-center gap-[69px]">
        <Image src={logo} alt="CLEAR" />
        <section className="flex flex-col items-center gap-[24px]">
          <p className="text-3xl font-bold">{title}</p>
          <p className="text-2xl font-semibold">{description}</p>
        </section>
        <section className="flex flex-col items-center gap-[24px]">
          <Link className="button" href="your-application">
            {get_started_button}
          </Link>
          <Link className="text-xl font-semibold" href="learn-more">
            {learn_more_button}
          </Link>
        </section>
      </main>
      <footer className="mb-[24px] flex flex-row items-center justify-center gap-[8px] text-sm">
        <Link href="your-application">{privacy_policy}</Link>•
        <Link href="learn-more">{terms_of_use}</Link>
      </footer>
    </div>
  );
};
export default WelcomePage;
