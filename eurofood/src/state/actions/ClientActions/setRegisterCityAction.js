import { SET_REGISTER_CITY } from '../../../constants/ClientConstants';

export default function setRegisterCityAction(city) {
    return { type: SET_REGISTER_CITY, city };
}
