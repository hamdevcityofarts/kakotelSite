import Image from 'next/image';
import iplanLogo from '~/assets/images/kakotel.png';

const Logo = () => (
  <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
    <Image width={200} height={100} alt="iplan" src={iplanLogo} />
  </span>
);

export default Logo;
