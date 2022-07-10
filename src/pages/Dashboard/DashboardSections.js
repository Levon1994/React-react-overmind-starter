import { useStore } from 'store';

import './Dashboard.scss';

const DashboardSections = () => {

  const {
    actions: { logout },
  } = useStore();

  return (
    <div className="dashboard">
      DashboardSections
      <button onClick={logout}>Click to logout</button>
    </div>
  );
}

export default DashboardSections;

