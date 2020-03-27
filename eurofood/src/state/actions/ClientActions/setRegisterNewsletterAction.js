import { SET_REGISTER_NEWSLETTER } from '../../../constants/ClientConstants';

export default function setRegisterNewsletterAction(newsletter) {
    return { type: SET_REGISTER_NEWSLETTER, newsletter };
}
