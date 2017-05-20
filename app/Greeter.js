import config from './config.json';
export default element => {
  const greeter = document.createElement(element);
  greeter.textContent = config.greetText;
  return greeter;
};
