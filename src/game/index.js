import toFind from './random';
import getNum from './input';
import success from './success';
import info from './info';
import obj from './feature';


export default () => {
let num = getNum();
while (num !== toFind){
 info(num, toFind);
 num = getNum();
 obj.addNumber();
 console.log(obj.result);
}
success(obj.result);
}