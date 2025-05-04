import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/logo.png';
import { getDictionary, Locale } from '@/dictionaries';

const LearnMorePage = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;

  // Localized texts
  const { learn_more_page } = await getDictionary(lang);
  const { title, description_1, description_2, description_3, description_4, get_started_button } =
    learn_more_page;

  return (
    <div className="flex flex-col items-center justify-center gap-[50px] p-[24px] text-center">
      <Image src={logo} width={182.4} alt="CLEAR" />
      <p className="text-3xl font-bold">{title}</p>
      <section className="flex flex-col items-center gap-[8px] text-2xl font-semibold">
        <p>{description_1}</p>
        <p>{description_2}</p>
        <p>{description_3}</p>
        <p>{description_4}</p>
      </section>
      <Link className="button" href="/your-application">
        {get_started_button}
      </Link>
    </div>
  );
};

export default LearnMorePage;
