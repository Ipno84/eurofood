import { SET_REGISTER_POSTCODE } from '../../../constants/ClientConstants';

export default function setRegisterPostcodeAction(postcode) {
    return { type: SET_REGISTER_POSTCODE, postcode };
}
