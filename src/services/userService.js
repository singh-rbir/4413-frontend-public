import http from './httpService';

const apiEndpoint = `/user`;

export async function login(email, password) {
  console.log(email, login);
  const { data } = await http.post(`${apiEndpoint}/login`, {
    email,
    password,
  });
  localStorage.setItem('user', JSON.stringify(data));
}

export function logout() {
  localStorage.removeItem('user');
}

export async function register(user) {
  return http.post(`${apiEndpoint}/signup`, user);
}

export function getCurrentUser() {
  const user = localStorage.getItem('user');
  return user;
}
