import http from './httpService';

const apiEndpoint = '/book';

export async function getAllCategory() {
  return http.get(`${apiEndpoint}/getAllCategory`);
}

export async function getBooks(pageno) {
  return http.get(`${apiEndpoint}/getAllBooks?pageno=${pageno}`);
}
