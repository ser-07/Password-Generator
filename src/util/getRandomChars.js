const getLowerChar = () => {
  return String.fromCharCode(Math.floor(97 + Math.random() * 26));
};

const getUpperChar = () => {
  return String.fromCharCode(Math.floor(65 + Math.random() * 26));
};

const getNumbers = () => {
  return String.fromCharCode(Math.floor(48 + Math.random() * 10));
};

const getSymbols = () => {
  const symbols = "!@#$%^&*()_+-={}[]<>";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

export {
  getUpperChar as upper,
  getLowerChar as lower,
  getNumbers as nums,
  getSymbols as symbols,
};
