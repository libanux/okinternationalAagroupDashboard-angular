import { NavItem } from '../../../../classes/nav-item';

export const navItems: NavItem[] = [
  { navCap: 'Apps' },
  {
    displayName: 'products',
    iconName: 'category',
    route: 'apps/products',
  },
  {
    displayName: 'stock',
    iconName: 'Home',
    route: 'apps/stock',
  },
  {
    displayName: 'purchase',
    iconName: 'packages',
    route: 'apps/purchase',
  },
  {
    displayName: 'sale',
    iconName: 'packages',
    route: 'apps/sale',
  },
  {
    displayName: 'reports',
    iconName: 'packages',
    route: 'apps/reports',
  },


  
  { navCap: 'daher components' },
 {
    displayName: 'Reports',
    iconName: 'layout',
    route: 'widgets/charts',
  },

  {
    navCap: 'Auth',
  },
  {
    displayName: 'settings',
    iconName: 'packages',
    route: 'apps/settings',
  },
  {
    displayName: 'users',
    iconName: 'user-plus',
    route: 'apps/users',
  },
  {
    displayName: 'Profile',
    iconName: 'ticket',
    route: 'apps/profile',
  },
  {
    displayName: 'Admins',
    iconName: 'user-plus',
    route: 'apps/admins',
  },
  {
    displayName: 'logout',
    iconName: 'login',
    route: '',
  }
];
