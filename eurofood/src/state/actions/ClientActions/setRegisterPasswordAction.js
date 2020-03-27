import { SET_REGISTER_PASSWORD } from '../../../constants/ClientConstants';

export default function setRegisterPasswordAction(password) {
    return { type: SET_REGISTER_PASSWORD, password };
}
