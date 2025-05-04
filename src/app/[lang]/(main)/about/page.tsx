import Image from 'next/image';
import aboutUsIllustration from '@/public/assets/AboutUsIllustration.jpg';

//TODO:
const AboutClearPage = () => {
  return (
    <div>
      <Image src={aboutUsIllustration} alt="About Clear" />
    </div>
  );
};

export default AboutClearPage;
