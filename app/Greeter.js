// import R from 'ramda';
export default element => {
  const greeter = document.createElement(element);
  greeter.textContent = 'Hi there and greeting';
  return greeter;
};
