export class NerdyJoke{
 constructor(joke){
   this.joke = joke;
 }

 get jokeToDisplay(){
  return `${this.joke}`
 }

 toString(){
  return (`This is a joke about Chuck Norris:\n${this.jokeToDisplay}`)
 }
}
