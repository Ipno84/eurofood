import { SET_REGISTER_EMAIL } from '../../../constants/ClientConstants';

export default function setRegisterEmailAction(email) {
    return { type: SET_REGISTER_EMAIL, email };
}
