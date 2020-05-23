import { SET_REGISTER_PEC } from '../../../constants/ClientConstants';

export default function setRegisterPecAction(pec) {
    return { type: SET_REGISTER_PEC, pec };
}
