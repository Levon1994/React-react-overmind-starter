const excludeProperty = (filter, valueToRemove) => {
  const {
    [valueToRemove]: exclude,
    ...restFilter
  } = filter;
  return restFilter;
};

export default excludeProperty;
