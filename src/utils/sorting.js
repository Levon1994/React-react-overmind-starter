const getValue = (value, formatter) => formatter
  ? formatter(value)
  : value;

const options = {
  asc: {
    less: -1,
    bigger: 1, 
  },
  desc: {
    less: 1,
    bigger: -1, 
  },
};

const defaultSortFn = (prev, next, dataKey, type, formatter) => {
  const first = getValue(prev.data[dataKey], formatter);
  const second = getValue(next.data[dataKey], formatter);
  const firstValue = first && String(first).toLocaleUpperCase();
  const secondValue = second && String(second).toLocaleUpperCase();

  const option = options[type];

  if (!firstValue) return option.bigger;
  if (!secondValue) return option.less;
  if (firstValue === secondValue) return 0;

  return firstValue < secondValue
    ? option.less
    : option.bigger;
};

const numberSortFn = (prev, next, dataKey, type, formatter, removeSymbol) => {
  const first = getValue(prev.data[dataKey], formatter);
  const second = getValue(next.data[dataKey], formatter);

  const option = options[type];

  const firstValue = removeSymbol
    ? parseFloat(String(first).replace('(', '-').replace(/[^\d.-]/g, ''))
    : first;
  const secondValue = removeSymbol
    ? parseFloat(String(second).replace('(', '-').replace(/[^\d.-]/g, ''))
    : second;

  if (firstValue === null || firstValue === undefined) return option.bigger;
  if (secondValue === null || secondValue === undefined) return option.less;
  if (first === second) return 0;

  return firstValue < secondValue
    ? option.less
    : option.bigger;
};

const dateSortFn = (prev, next, dataKey, type) => {
  const first = prev.data[dataKey];
  const second = next.data[dataKey];
  
  if (!first) return 1;
  if (!second) return -1;

  const firstValue = new Date(first);
  const secondValue = new Date(second);

  if (type === 'asc') {
    return firstValue - secondValue;
  } else if (type === 'desc') {
    return -(firstValue - secondValue);
  }

  return 0;
};

const statusSortFn = (prev, next, dataKey, type) => {
  const first = prev.data[dataKey];
  const second = next.data[dataKey];

  if (!first) return type === 'asc' ? -1 : 1;
  if (!second) return type === 'asc' ? 1 : -1;

  return 0;
};

export {
  dateSortFn,
  statusSortFn,
  numberSortFn,
  defaultSortFn,
};
