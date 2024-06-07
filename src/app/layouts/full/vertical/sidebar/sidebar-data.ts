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
    displayName: 'Labor Recruitment',
    iconName: 'clipboard',
    route: '/labors',
  },
  {
    displayName: 'Notes',
    iconName: 'note',
    route: '/notes',
  },
  
  // {
  //   navCap: 'Pages',
  // },
  {
    displayName: 'Reports',
    iconName: 'layout',
    // iconName: 'file-description',
    route: 'widgets/charts',
  },
  // {
  //   displayName: 'Tables',
  //   iconName: 'file-invoice',
  //   route: 'tables/expand-table',
  // },

  {
    navCap: 'Auth',
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
