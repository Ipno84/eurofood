/*export const PROTOCOL = `http${
    process.env.NODE_ENV === 'development' ? '' : 's'
}://`;
export const HOST = `${PROTOCOL}${
    process.env.NODE_ENV === 'development' ? 'svil-upgrade' : 'www'
}.eurofoodservice.it`;
*/
export const PROTOCOL = 'https://';
export const HOST = `${PROTOCOL}www.eurofoodservice.it`;
export const SUFFIX = 'api';
export const PREFIX = 'eurofood_';
export const BASIC_TOKEN = 'UktHTlpSMllTUDZKTkM1NjU5NkQyRkk5NEpGTlhZMkM6';
export const PRIVATE_TOKEN = '842EJPXUF7Q7MZBCFIDH4ML38PHYZBWT';

export const BASIC_PARAMS = { output_format: 'JSON' };

export const ENDPOINT_CATEGORIES = 'categories';
export const ENDPOINT_PRODUCTS = 'products';
export const ENDPOINT_CUSTOMERS = 'customers'; //PREFIX
export const ENDPOINT_ADDRESSES = 'addresses'; //PREFIX
export const ENDPOINT_ORDERS = 'orders'; //PREFIX
export const ENDPOINT_CARTS = 'carts'; //PREFIX
export const ENDPOINT_IMAGES = 'images';
export const ENDPOINT_LOGIN = 'login';
export const ENDPOINT_SETTINGS = 'settings.json';
export const ENDPOINT_STOCK_AVAILABLES = 'stock_availables';
export const ENDPOINT_SPECIFIC_PRICES = 'specific_prices';
