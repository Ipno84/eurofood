import { SET_LOGIN_PASSWORD } from '../../../constants/ClientConstants';

export default function setLoginPasswordAction(password) {
    return { type: SET_LOGIN_PASSWORD, password };
}
