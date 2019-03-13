import {
 GitHubRepo
} from './model';

const REPOS_URL = 'https://api.github.com/users/mat3e/repos';
const POSTS_URL = 'https://raw.githubusercontent.com/FilippoInzaghi/my-app/master/';
const FORBIDDEN_REPOS = ['ux'];

const convert = ({
 name,
 stargazers_count: stars,
 license
}) => new GitHubRepo({
 name,
 stars,
 license: license ? license.spdx_id : ''
});

export default async function getRepos() {
 try {
  const response = await fetch(REPOS_URL);
  if (response.ok) {
   return (await response.json()).filter(repo => !FORBIDDEN_REPOS.includes(repo.name)).map(convert);
 }
 throw Error('Response not 200');
} catch (err) {
 console.warn(err);
 return [];
}
}
export async function getBlogPost(name = 'README.md') {
  try {
   const response = await fetch(`${POSTS_URL}${name}`);
   if (response.ok) {
    return (await response.text())
  }
  throw Error('Response not 200');
 } catch (err) {
  console.warn(err);
  return '';
 }
 }