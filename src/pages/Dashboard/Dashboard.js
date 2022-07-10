import Page from 'components/Page';

import DashboardSections from './DashboardSections';

const sections = [
  {
    path: '/',
    component: DashboardSections,
    name: '',
  },
];

const Dashboard = () => <Page sections={sections} />;

export default Dashboard;
