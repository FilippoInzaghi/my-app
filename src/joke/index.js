import getJoke from './service';

export default async function () {
	const joke = await getJoke();
	alert(joke);
	console.log(""+joke);
	return joke;
}