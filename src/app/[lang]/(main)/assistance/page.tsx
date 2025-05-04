import Image from 'next/image';
import getAssistanceIllustration from '@/public/assets/GetAssistanceIllustration.jpg';

//TODO:
const GetAssistancePage = () => {
  return (
    <div>
      <Image src={getAssistanceIllustration} alt="Get Assistance" />
    </div>
  );
};

export default GetAssistancePage;
