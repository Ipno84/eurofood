import { REDUCER_NAME_ERRORS } from '../../../constants/StoreConstants';

export default function getErrorsSelector(state) {
    return state[REDUCER_NAME_ERRORS].errors;
}
