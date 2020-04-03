import axios from 'axios';

export const AXIOS_ERROR_CLASS_NAME = 'AxiosError';

export default class AxiosError extends axios.Cancel {
    constructor(message, payload) {
        super(message);
        this.name = AXIOS_ERROR_CLASS_NAME;
        this.payload = payload;
    }
}
