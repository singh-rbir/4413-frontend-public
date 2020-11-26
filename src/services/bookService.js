import http from './httpService';

const apiEndpoint = '/book';

export async function getAllCategory() {
  return http.get(`${apiEndpoint}/getAllCategory`);
}
