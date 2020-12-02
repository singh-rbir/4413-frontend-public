import http from './httpService';

const apiEndpoint = `/user`;

export async function login(email, password) {
  console.log(email, login);
  const { data } = await http.post(`${apiEndpoint}/login`, {
    email,
    password,
  });
  console.log('login:', data);
  localStorage.setItem('user', JSON.stringify(data));
}

export function logout() {
  localStorage.removeItem('user');
}

export async function register(user) {
  console.log(user);
  return http.post(`${apiEndpoint}/signup`, user);
}

export function getCurrentUser() {
  const user = localStorage.getItem('user');
  console.log(user);
  return user;
}
