import { AiOutlineHome, AiOutlineSafetyCertificate } from 'react-icons/ai';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { BiConversation } from 'react-icons/bi';
import { TfiControlForward } from 'react-icons/tfi';
import { RxDashboard } from 'react-icons/rx';

const my_navbar_data = [
  {
    index: 1,
    nav_link: `/#home_page`,
    navbar_name: 'Home',
    nav__icon: AiOutlineHome,
    bc: '#00a5ee',
  },
  {
    index: 2,
    nav_link: `/#about_myself`,
    navbar_name: 'About Myself',
    nav__icon: TfiControlForward,
  },
  {
    index: 3,
    nav_link: `/tech/#my_skill`,
    navbar_name: 'Skills and Abilities',
    nav__icon: RiCodeSSlashLine,
    another_page: true,
  },
  {
    index: 4,
    nav_link: '/education_and_certifications/#my-background',
    navbar_name: 'Education and Certifications',
    nav__icon: AiOutlineSafetyCertificate,
    another_page: true,
  },
  {
    index: 5,
    nav_link: '/#my-work',
    navbar_name: 'Projects and Experience',
    nav__icon: RxDashboard,
  },
  {
    index: 6,
    nav_link: `/#contact_page`,
    navbar_name: 'Contact Me',
    nav__icon: BiConversation,
  },
];

export default my_navbar_data;
