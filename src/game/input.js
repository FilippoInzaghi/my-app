const ASK_USER = "Podaj liczbę: ";
// import {addNumber, counter} from './feature';
export default () => {
  // addNumber();
  // console.log(counter);
  return parseInt(prompt(ASK_USER));
};