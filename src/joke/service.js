import {
  JokesRepo
} from './model';
import {
  NerdyJoke
} from './nerdyJoke';

const REPOS_JOKE_URL = 'https://official-joke-api.appspot.com/random_joke';
const NERDY_JOKE_URL = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]';


const convert = ({
  type,
  setup,
  punchline
}) => new JokesRepo({
  type,
  setup,
  punchline
});

export default async function getJoke() {
  try {
    const response = await fetch(REPOS_JOKE_URL);
    if (response.ok) {
      const newJoke = await response.json();
      if (newJoke.type !== 'programming') {
        const res = await fetch(NERDY_JOKE_URL);
        if (res.ok) {
          const nerdyJoke = await res.json();
          return new NerdyJoke(nerdyJoke.value.joke);
        }
        throw Error('Response not 200')
      }
      return convert(newJoke);
    }
    throw Error('Response not 200');
  } catch (err) {
    console.warn(err);
    return new NerdyJoke(`Why do C# and Java developers keep breaking their keyboards?/nBecause they use a strongly typed language.`);
  }
}