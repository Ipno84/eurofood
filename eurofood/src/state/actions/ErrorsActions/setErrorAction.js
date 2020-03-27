import { SET_ERROR } from './../../../constants/ErrorsConstants';

export default function setErrorAction({ key, message }) {
    return {
        type: SET_ERROR,
        key,
        message
    };
}
