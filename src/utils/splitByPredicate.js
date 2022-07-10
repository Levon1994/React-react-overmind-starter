const splitByPredicate = (arr, predicate) => {
  let i = -1;
  const filtered = [];
  const rest = [];
  const { length } = arr;

  while (++i < length) {
    const value = arr[i];
    if (predicate(value, i, arr)) {
      filtered.push(value);
    } else {
      rest.push(value);
    }
  }

  return [filtered, rest];
};

export default splitByPredicate;
