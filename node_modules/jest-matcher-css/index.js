module.exports = (received, argument) => {
  const stripped = str => str.replace(/[;\s]/g, '');

  if (stripped(received) === stripped(argument)) {
    return {
      message: () => `expected ${received} not to match CSS ${argument}`,
      pass: true,
    };
  } else {
    return {
      message: () => `expected ${received} to match CSS ${argument}`,
      pass: false,
    };
  }
};