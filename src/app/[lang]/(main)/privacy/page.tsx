import Image from 'next/image';
import dataPrivacyIllustration from '@/public/assets/DataPrivacyIllustration.jpg';

//TODO:
const DataPrivacyPage = () => {
  return (
    <div>
      <Image src={dataPrivacyIllustration} alt="Data Privacy" />
    </div>
  );
};

export default DataPrivacyPage;
