import X2JS from 'x2js';
import createCustomersCall from './createCustomersCall';

export default function registerCall(payload) {
    const jsBody = {
        prestashop: {
            customers: payload
        }
    };
    const x2js = new X2JS();
    const xmlBody = x2js.js2xml(jsBody);
    return createCustomersCall(xmlBody);
}
