import { store } from 'store';
import dayjs from './dayjs';

const today = () => {
  const { PartnerBalanceChangeTime } = store.state.user || {};
  if (!PartnerBalanceChangeTime) return dayjs();

  const [h, m, s] = PartnerBalanceChangeTime.split(':');

  return dayjs().hour(h).minute(m).second(s);
};

export default today;
