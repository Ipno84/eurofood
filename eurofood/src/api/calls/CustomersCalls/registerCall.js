import createCustomersCall from './createCustomersCall';
import jsToXml from './../../../helpers/jsToXml';

export default function registerCall(payload) {
    const jsBody = {
        prestashop: {
            customer: payload
        }
    };
    const xmlBody = jsToXml(jsBody);
    return createCustomersCall(xmlBody);
}
