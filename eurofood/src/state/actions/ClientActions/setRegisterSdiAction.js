import { SET_REGISTER_SDI } from '../../../constants/ClientConstants';

export default function setRegisterSdiAction(sdi) {
    return { type: SET_REGISTER_SDI, sdi };
}
