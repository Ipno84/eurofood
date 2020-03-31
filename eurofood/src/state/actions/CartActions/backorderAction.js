import { BACKORDER } from './../../../constants/CartConstants';

export default function backorderAction(id) {
    return {
        type: BACKORDER,
        id
    };
}
