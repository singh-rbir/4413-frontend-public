import { func } from 'joi';
import http from './httpService';

const apiEndpoint = `/user`;

export async function login(email, password) {
  const { data } = await http.post(`${apiEndpoint}/login`, {
    email,
    password,
  });
  console.log(data);
  return data;
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

export function addAddress(address) {
  return http.post(`${apiEndpoint}/addAddress`, address);
}

export function getAddress(userId) {
  return http.get(`${apiEndpoint}/getAddress?userId=${userId}`);
}
