import NavBar from '@/components/NavBar';
import { Locale } from '@/dictionaries';

const MainNavigationLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) => {
  const { lang } = await params;

  return (
    <div className="mr-[24px] mb-[24px] flex grow items-center gap-[24px]">
      <NavBar lang={lang} />
      {children}
    </div>
  );
};

export default MainNavigationLayout;
