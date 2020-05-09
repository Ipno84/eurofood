import { SET_REGISTER_ID_USER_TYPE } from '../../../constants/ClientConstants';

export default function setRegisterIdUserTypeAction(idUserType) {
    return { type: SET_REGISTER_ID_USER_TYPE, idUserType };
}
