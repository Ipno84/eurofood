import { REDUCER_NAME_CLIENT } from '../../../constants/StoreConstants';

export default function getCompanyFormSelector(state) {
    return state[REDUCER_NAME_CLIENT].companyForm;
}
