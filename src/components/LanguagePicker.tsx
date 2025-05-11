import ChevronDown from './Icons/ChevronDown';
import { FC } from 'react';
import { flags } from './Flags';
import { Locale } from '@/dictionaries';

interface LanguagePickerProps {
  lang: Locale;
}
const languageNames: Record<Locale, string> = {
  en: 'English',
  tr: 'Türkçe',
};

//TODO: picker mechanism
const LanguagePicker: FC<LanguagePickerProps> = ({ lang }) => {
  const Flag = flags[lang];

  return (
    <div className="flex flex-row items-center gap-[19px]">
      <Flag className="rounded-sm" height={24} width={36} />
      <div className="flex flex-row items-center gap-[4px]">
        <p className="font-semibold">{languageNames[lang]}</p>
        <ChevronDown />
      </div>
    </div>
  );
};

export default LanguagePicker;
