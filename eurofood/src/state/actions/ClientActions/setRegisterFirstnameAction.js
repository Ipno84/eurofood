import { SET_REGISTER_FIRSTNAME } from '../../../constants/ClientConstants';

export default function setRegisterFirstnameAction(firstname) {
    return { type: SET_REGISTER_FIRSTNAME, firstname };
}
