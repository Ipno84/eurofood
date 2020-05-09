import { SET_REGISTER_ADDRESS } from '../../../constants/ClientConstants';

export default function setRegisterAddressAction(address) {
    return { type: SET_REGISTER_ADDRESS, address };
}
