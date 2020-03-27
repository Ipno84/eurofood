import { SET_REGISTER_ID_GENDER } from '../../../constants/ClientConstants';

export default function setRegisterIdGenderAction(idGender) {
    return { type: SET_REGISTER_ID_GENDER, idGender };
}
