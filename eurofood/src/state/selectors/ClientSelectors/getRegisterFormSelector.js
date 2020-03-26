import { REDUCER_NAME_CLIENT } from '../../../constants/StoreConstants';

export default function getRegisterFormSelector(state) {
    return state[REDUCER_NAME_CLIENT].registerForm;
}
