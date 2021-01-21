import { SET_REGISTER_ID_COUNTRY } from '../../../constants/ClientConstants';

export default function setRegisterIdCountryAction(id_country) {
    return { type: SET_REGISTER_ID_COUNTRY, id_country };
}
