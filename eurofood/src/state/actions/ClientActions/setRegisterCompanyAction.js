import { SET_REGISTER_COMPANY } from '../../../constants/ClientConstants';

export default function setRegisterCompanyAction(company) {
    return { type: SET_REGISTER_COMPANY, company };
}
