export class JokesRepo{
 constructor({type, setup, punchline}){
   this.type = type;
   this.setup = setup;
   this.punchline = punchline;
 }

 get setupSentence(){
  return `${this.setup}`
 }

 get punchlineAnswer(){
  return `${this.punchline}`
 }

 toString(){
  return (`${this.setupSentence}\n${this.punchlineAnswer}`)
 }
}

