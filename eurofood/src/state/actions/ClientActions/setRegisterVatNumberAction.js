import { SET_REGISTER_VAT_NUMBER } from '../../../constants/ClientConstants';

export default function setRegisterVatNumberAction(vat_number) {
    return { type: SET_REGISTER_VAT_NUMBER, vat_number };
}
