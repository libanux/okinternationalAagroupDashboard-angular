import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  // {
  //   navCap: 'Home',
  // },
  // {
  //   displayName: 'Analytical',
  //   iconName: 'chart-pie-2',
  //   route: '/dashboards/dashboard1',
  // },
  {
    displayName: 'Dashboard',
    iconName: 'inbox',
    route: '/',
  },
  // {
  //   navCap: 'Apps',
  // },
  // {
  //   displayName: 'Contacts',
  //   iconName: 'phone',
  //   route: 'apps/contacts',
  // },
  
  {
    displayName: 'Package',
    iconName: 'packages',
    route: 'apps/packages',
  },
  {
    displayName: 'Visa',
    iconName: 'ticket',
    route: 'apps/visa',
  },
  {
    displayName: 'Labor Recruitment',
    iconName: 'clipboard',
    route: 'apps/labors',
  },
  {
    displayName: 'Notes',
    iconName: 'note',
    route: 'apps/notes',
  },
  
  // {
  //   navCap: 'Pages',
  // },
  {
    displayName: 'Charts',
    iconName: 'layout',
    // iconName: 'file-description',
    route: 'widgets/charts',
  },
  {
    displayName: 'Tables',
    iconName: 'file-invoice',
    route: 'tables/expand-table',
  },

  {
    navCap: 'Auth',
  },
  {
    displayName: 'Users',
    iconName: 'user-plus',
    route: 'apps/employee',
  },
  {
    displayName: 'logout',
    iconName: 'login',
    route: '/authentication/login',
  }
];
