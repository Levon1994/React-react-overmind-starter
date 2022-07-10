import { useLocation } from 'react-router-dom';

const useQuery = data => {
  const { search } = useLocation();
  const queryParam = () => new URLSearchParams(search);

  if (!data || !data.length) return {};

  return data.reduce((acc, item) => ({
    ...acc,
    [item]: queryParam().get(item),
  }), {});
};

export default useQuery;
