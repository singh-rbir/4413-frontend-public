import { func } from 'joi';
import http from './httpService';

const apiEndpoint = `/admin`;

export async function generateReport(userId) {
  return http.get(`${apiEndpoint}/generateReport?userId=${userId}`);
}

export async function getTopSold(userId) {
  return http.get(`${apiEndpoint}/getTopSold?userId=${userId}`);
}