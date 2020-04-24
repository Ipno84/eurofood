export const NAVIGATION_ERROR_CLASS_NAME = 'NavigationError';

export default class NavigationError extends Error {
    constructor(message, payload) {
        super(message);
        this.name = NAVIGATION_ERROR_CLASS_NAME;
        this.payload = payload;
    }
}
