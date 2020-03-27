import { SET_ERRORS } from './../../../constants/ErrorsConstants';

export default function setErrorsAction(errors) {
    return {
        type: SET_ERRORS,
        errors
    };
}
