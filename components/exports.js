import moliya from '../public/moliya.png';
import mitc from '../public/mitc.png';
import adliya from '../public/adliya.png';
import gerb from '../public/gerb.png';
import admin from '../public/admin.png';
import akt from '../public/akt.png';
import park from '../public/park.png';
import {
  ArrowPathIcon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
export const solutions = [
  // {
  //   name: 'pa.ijro.uz',
  //   description:
  //     'O‘zbekiston Respublikasi Prezidentining farmon, qaror, farmoyish va topshiriqlari monitoring qilish tizimi',
  //   // href: 'https://pa.ijro.uz/',
  //   href: '/guide',
  //   icon: ChartBarIcon,
  // },
  {
    name: 'ijro.gov.uz',
    description:
      'O‘zbekiston Respublikasi Prezidentining farmon, qaror, farmoyish va topshiriqlari monitoring qilish tizimi',
    href: 'https://ijro.gov.uz/',
    icon: ChartBarIcon,
  },
  {
    name: 'edo.ijro.uz',
    description: 'Ijro intizomi. Idoralararo yagona elektron tizimi.',
    href: 'https://edo.ijro.uz/',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'lawyer.ijro.uz',
    description: 'E-huquqshunos. Elektron yurist tizimi',
    href: 'https://lawyer.ijro.uz/',
    icon: ShieldCheckIcon,
  },
  {
    name: 'app.ijro.uz',
    description: 'Ijro intizomi. Idoralararo yagona elektron tizimi (eski)',
    href: 'https://app.ijro.uz/',
    icon: Squares2X2Icon,
  },
  {
    name: 'adm.ijro.uz',
    description:
      'Ijro intizomi. Idoralararo yagona elektron tizimi (yuridik tashkilotlar uchun)',
    href: 'https://adm.ijro.uz/',
    icon: Squares2X2Icon,
  },
  {
    name: 'E-xat',
    description: 'Muhofazalangan elektron pochta tizimi',
    href: 'http://exat.uz/',
    icon: ArrowPathIcon,
  },
];
export const callsToAction = [
  {
    name: `Video Qo'llanma`,
    href: 'https://www.youtube.com/results?search_query=ijro+gov',
    icon: PlayIcon,
  },
  { name: 'Aloqa', href: '/contact', icon: PhoneIcon },
];
export const resources = [
  {
    name: 'UNICON-SOFT haqida',
    description: `UNICON-SOFT haqida`,
    href: '/general',
    icon: LifebuoyIcon,
  },
  {
    name: `Qo'llanma`,
    description: `Tizim bo'yicha qo'llanmalar`,
    href: '/guide',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Bizning jamoa',
    description: `Bizning jamoamiz haqida ma'lumot`,
    href: '/about',
    icon: CalendarIcon,
  },
  {
    name: 'Yuklab olish uchun',
    description: 'Kerakli materiallar va malumotlar',
    href: '/download',
    icon: ShieldCheckIcon,
  },
];

export const TelNumber = [
  { id: 1, icon: PhoneIcon, info: 'tex yordam', number: '(95)475-47-02' },
  { id: 2, icon: PhoneIcon, info: 'tex yordam', number: '(95)475-47-03' },
  {
    id: 3,
    icon: PhoneIcon,
    info: 'shartnoma va buxgalteriya',
    number: '(95)475-47-14',
  },
  { id: 4, icon: PhoneIcon, info: 'umumiy', number: '(95)505-46-46' },
];

export const Hamkorlar = [
  {
    id: 1,
    name: "O'zbekiston Respublikasi Adliya vazirligi",
    link: 'https://adliya.uz/',
    number: '1008',
    email: 'info@adliya.uz',
    image: adliya,
  },
  {
    id: 2,
    name: "O'zbekiston Respublikasi Prezidenti Administratsiyasi",
    link: 'https://president.uz/uz/pages/view/about_staff?menu_id=15',
    number: '1213',
    email: 'https://murojaat.gov.uz/oz?organization_id=6133',
    image: admin,
  },
  {
    id: 3,
    name: "O'zbekiston Respublikasi Axborot texnologiyalari va kommunikatsiyalarini rivojlantirish vazirligi",
    link: 'https://mitc.uz/uz/',
    number: '1199',
    email: 'mitc@exat.uz',
    image: mitc,
  },
  {
    id: 4,
    name: "O'zbekiston Respublikasi Iqtisodiy taraqqiyot va kambag'allikni qisqartirish vazirligi",
    link: 'https://mineconomy.uz/',
    number: '1171',
    email: 'info@mineconomy.uz',
    image: moliya,
  },
  {
    id: 5,
    name: "O'zbekiston Respublikasi Raqamli texnologiyalar vazirligi",
    link: 'https://digital.uz/',
    number: '1191',
    email: 'info@mineconomy.uz',
    image: akt,
  },
  {
    id: 6,
    name: 'IT-PARK',
    link: 'https://it-park.uz/uz/itpark',
    number: '+998 71 209 11 99',
    email: 'info@it-park.uz',
    image: park,
  },
];
