import { SET_REGISTER_ID_STATE } from '../../../constants/ClientConstants';

export default function setRegisterIdStateAction(id_state) {
    return { type: SET_REGISTER_ID_STATE, id_state };
}
