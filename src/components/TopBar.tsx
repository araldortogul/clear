import { FC } from 'react';
import Clear from './Clear';
import { Locale } from '@/dictionaries';
import LanguagePicker from './LanguagePicker';

interface TopBarProps {
  lang: Locale;
}

const TopBar: FC<TopBarProps> = ({ lang }) => {
  return (
    <header className="flex w-screen flex-row justify-between px-[24px] py-[21.5px]">
      <Clear />
      <LanguagePicker lang={lang} />
    </header>
  );
};

export default TopBar;
