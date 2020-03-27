import { SET_REGISTER_PSGDPR } from '../../../constants/ClientConstants';

export default function setRegisterPsgdprAction(psgdpr) {
    return { type: SET_REGISTER_PSGDPR, psgdpr };
}
