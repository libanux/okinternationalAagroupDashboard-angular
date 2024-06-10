import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [

  
  {
    displayName: 'Package',
    iconName: 'packages',
    route: '/',
  },
  {
    displayName: 'Visa',
    iconName: 'ticket',
    route: '/visa',
  },
  {
    displayName: 'Ticketing',
    iconName: 'ticket',
    route: '',
  },
  {
    displayName: 'Customers',
    iconName: 'ticket',
    route: '',
  },
  {
    displayName: 'Labor Recruitment',
    iconName: 'clipboard',
    route: '/labors',
  },
  {
    displayName: 'Notes',
    iconName: 'note',
    route: '/notes',
  },
  
  {
    displayName: 'Reports',
    iconName: 'layout',
    route: 'widgets/charts',
  },

  {
    navCap: 'Auth',
  },
  {
    displayName: 'Profile',
    iconName: 'ticket',
    route: '',
  },
  {
    displayName: 'Users',
    iconName: 'user-plus',
    route: '/employee',
  },
  {
    displayName: 'logout',
    iconName: 'login',
    route: '/authentication/login',
  }
];
