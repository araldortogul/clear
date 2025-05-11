import NavBarItem from './NavBarItem';
import { icons } from './Icons';
import { getDictionary, Locale } from '@/dictionaries';

interface NavItem {
  id: keyof Awaited<ReturnType<typeof getDictionary>>['side_bar'];
  href: string;
  icon: keyof typeof icons;
}
const navItems: NavItem[] = [
  {
    id: 'dashboard',
    href: '/dashboard',
    icon: 'barGroup',
  },
  {
    id: 'your_application',
    href: '/your-application',
    icon: 'perspective',
  },
  {
    id: 'saved_scenarios',
    href: '/saved-scenarios',
    icon: 'heart',
  },
  {
    id: 'get_assistance',
    href: '/assistance',
    icon: 'messageText',
  },
  {
    id: 'data_privacy',
    href: '/privacy',
    icon: 'shieldCheck',
  },
  {
    id: 'about_clear',
    href: '/about',
    icon: 'userProfileGroup',
  },
];

const NavBar = async (params: { lang: Locale }) => {
  const { lang } = params;
  const side_bar_texts = (await getDictionary(lang)).side_bar;

  return (
    <nav className="my-[24px] h-full rounded-r-2xl bg-white p-[16px] drop-shadow-md">
      <ul>
        {navItems.map(({ id, href, icon }) => (
          <li key={id}>
            <NavBarItem href={href} label={side_bar_texts[id]} icon={icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
