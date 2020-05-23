import { SET_USER } from '../../../constants/ClientConstants';

export default function setUserAction(user) {
    return { type: SET_USER, user };
}
