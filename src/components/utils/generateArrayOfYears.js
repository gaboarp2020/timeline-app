const generateArrayOfYears = () => {
  const max = new Date().getFullYear();
  const min = max - 100;
  const years = [];

  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
};

export default generateArrayOfYears;
