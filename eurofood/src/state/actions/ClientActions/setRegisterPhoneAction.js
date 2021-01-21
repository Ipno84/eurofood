import { SET_REGISTER_PHONE } from '../../../constants/ClientConstants';

export default function setRegisterPhoneAction(phone) {
    return { type: SET_REGISTER_PHONE, phone };
}
