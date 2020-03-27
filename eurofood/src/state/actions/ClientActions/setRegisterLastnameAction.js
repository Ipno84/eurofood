import { SET_REGISTER_LASTNAME } from '../../../constants/ClientConstants';

export default function setRegisterLastnameAction(lastname) {
    return { type: SET_REGISTER_LASTNAME, lastname };
}
