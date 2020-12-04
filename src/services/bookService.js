import http from './httpService';

const apiEndpoint = '/book';

export async function getAllCategory() {
  return http.get(`${apiEndpoint}/getAllCategory`);
}

export async function getBooks(pageno) {
  return http.get(`${apiEndpoint}/getAllBooks?pageno=${pageno}`);
}

export async function getBookBySearchTitle(title) {
  return http.get(`${apiEndpoint}/searchByTitle?title=${title}`);
}

export async function getBookByBid(bid) {
  return http.get(`${apiEndpoint}//getProductInfo?bid=${bid}`);
}
export async function getByCategory(category, pageno) {
  return http.get(
    `${apiEndpoint}/findByCategory?category=${category}&pageno=${pageno}`
  );
}

export async function addReview(review) {
  return http.post(`${apiEndpoint}/addReview`, review);
}

export async function getReviewList(bid) {
  return http.get(`${apiEndpoint}/getReviews?bid=${bid}`);
}
