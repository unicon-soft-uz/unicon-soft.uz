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
  {
    name: 'pa.ijro.uz',
    description:
      'O‘zbekiston Respublikasi Prezidentining farmon, qaror, farmoyish va topshiriqlari monitoring qilish tizimi',
    // href: 'https://pa.ijro.uz/',
    href: '/guide',
    icon: ChartBarIcon,
  },
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
    href: '/',
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
export const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
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
