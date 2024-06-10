import { Tickets } from "./tickets";

export const ticketsArray: Tickets[] = [
  {
    id: 1,
    customer: 'John Doe',
    issueDate: '2024-01-01',
    description: 'Network issue',
    cost: '100 $',
    credit: '50 $',
    balance:' 50 $',
    note: 'Resolved quickly',
    status: 'InProgress'
  },
  {
    id: 2,
    customer: 'Jane Smith',
    issueDate: '2024-01-02',
    description: 'Software installation',
    cost: '150 $',
    credit: '150 $',
    balance: '0 $',
    note: 'All good',
    status: 'Completed'
  },
  {
    id: 3,
    customer: 'Emily Johnson',
    issueDate: '2024-01-03',
    description: 'Hardware repair',
    cost: '200 $' ,
    credit: '0 $',
    balance:' 200 $',
    note: 'Needs follow-up',
    status: 'Cancelled'
  },
  {
    id: 4,
    customer: 'Michael Brown',
    issueDate: '2024-01-04',
    description: 'Password reset',
    cost: '50 $',
    credit: '50 $',
    balance:' 0 $',
    note: 'Done',
    status: 'Cancelled'
  },
  {
    id: 5,
    customer: 'Chris Davis',
    issueDate: '2024-01-05',
    description: 'VPN setup',
    cost: '120 $',
    credit: '60 $',
    balance: '60 $',
    note: 'In progress',
    status: 'InProgress'
  },
  {
    id: 6,
    customer: 'Patricia Martinez',
    issueDate: '2024-01-06',
    description: 'Email issue',
    cost: '80 $',
    credit: '80 $',
    balance: '0 $',
    note: 'Fixed',
    status: 'Completed'
  },
  {
    id: 7,
    customer: 'Linda Rodriguez',
    issueDate: '2024-01-07',
    description: 'Printer setup',
    cost: '70 $',
    credit: '35 $',
    balance: '35 $',
    note: 'Partially completed',
    status: 'Cancelled'
  },
  {
    id: 8,
    customer: 'Barbara Clark',
    issueDate: '2024-01-08',
    description: 'Software update',
    cost: '90 $',
    credit: '45 $',
    balance: '45 $',
    note: 'Pending',
    status: 'Completed'
  },
  {
    id: 9,
    customer: 'James Lewis',
    issueDate: '2024-01-09',
    description: 'Data backup',
    cost: '110 $',
    credit: '55 $',
    balance: '55 $',
    note: 'Scheduled',
    status: 'Completed'
  },
  {
    id: 10,
    customer: 'Thomas Walker',
    issueDate: '2024-01-10',
    description: 'Network configuration',
    cost: '130 $',
    credit: '65 $',
    balance: '65 $',
    note: 'Ongoing',
    status: 'Cancelled'
  }
];
