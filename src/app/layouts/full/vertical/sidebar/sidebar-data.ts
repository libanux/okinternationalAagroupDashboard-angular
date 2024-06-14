import { NavItem } from '../../../../classes/nav-item';

export const navItems: NavItem[] = [
  { navCap: 'Apps' },
  {
    displayName: 'Products',
    iconName: 'category',
    route: 'apps/products',
  },
  {
    displayName: 'Stock',
    iconName: 'packages',
    route: 'apps/stock',

    children: [
      {
        displayName: 'View',
        iconName: '',
        route: 'apps/stock/view',
      },
      {
        displayName: 'Adjust',
        iconName: '',
        route: 'apps/stock/Adjust',
      },
      {
        displayName: 'Adjustement',
        iconName: '',
        route: 'apps/stock/Adjustement',
      }
    ],
  },
  // {
  //   displayName: 'stock',
  //   iconName: 'Home',
  //   route: 'apps/stock',
  // },
  {
    displayName: 'Purchase',
    iconName: 'packages',
    route: 'apps/purchase',

    children: [
      {
        displayName: 'Add purchase',
        iconName: '',
        route: 'apps/purchase/add',
      },
      {
        displayName: 'Purchase invoice',
        iconName: '',
        route: 'apps/purchase/invoices',
      },
    ],
  },
  {
    displayName: 'Sale',
    iconName: 'packages',
    route: 'apps/sale',

    children: [
      {
        displayName: 'Create sale',
        iconName: '',
        route: 'apps/sale/create',
      },
      {
        displayName: 'Sales invoice',
        iconName: '',
        route: 'apps/sale/invoices',
      },
    ],
  },

  {
    displayName: 'Reports',
    iconName: 'packages',
    route: 'apps/reports',
  },

  


  
//   { navCap: 'daher components' },
//  {
//     displayName: 'Reports',
//     iconName: 'layout',
//     route: 'widgets/charts',
//   },

  {
    navCap: 'Auth',
  },
  {
    displayName: 'Settings',
    iconName: 'packages',
    route: 'apps/settings',
  },
  {
    displayName: 'Users',
    iconName: 'user-plus',
    route: 'apps/users',
  },
  {
    displayName: 'Profile',
    iconName: 'ticket',
    route: 'apps/profile',
  },
  // {
  //   displayName: 'Admins',
  //   iconName: 'user-plus',
  //   route: 'apps/admins',
  // },
  {
    displayName: 'Logout',
    iconName: 'login',
    route: 'login',
  }
];
