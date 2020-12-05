import http from './httpService';

const apiEndpoint = '/order';

export async function addItemsToCart(cartItems) {
  console.log(cartItems);
  return http.post(`${apiEndpoint}/addItemsToCart`, cartItems);
}

export async function addSingleItemToCart(cartItem) {
  return http.post(`${apiEndpoint}/addSingleCartItem`, cartItem);
}

export async function getCart(user) {
  console.log('Get Cart', user);
  return http.get(`${apiEndpoint}/getCart?userId=${user.userId}`);
}

export async function confirmOrder(order) {
  console.log(order);
  return http.post(`${apiEndpoint}/confirmOrder`, order);
}

export async function removeCartItem(item) {
  return http.post(`${apiEndpoint}/removeCartItem`, item);
}
