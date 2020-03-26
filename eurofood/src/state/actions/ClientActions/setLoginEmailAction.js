import { SET_LOGIN_EMAIL } from '../../../constants/ClientConstants';

export default function setLoginEmailAction(email) {
    return { type: SET_LOGIN_EMAIL, email };
}
