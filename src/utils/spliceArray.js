const spliceArray = (arr, startIndex, count) => {
  const arrayCopy = [...arr];
  arrayCopy.splice(startIndex, count);

  return arrayCopy;
};

export default spliceArray;
