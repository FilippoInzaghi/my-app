let counter = 1;
// const addNumber = () => {
//  counter++;
//  };

// export{counter, addNumber};

export default {
 addNumber() {
  counter++;
 },
 get result(){
  return counter;
 }
}