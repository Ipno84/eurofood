export const VALIDATION_CLASS_NAME = 'ValidationError';

export default class ValidationError extends Error {
    constructor(message, payload) {
        super(message);
        this.name = VALIDATION_CLASS_NAME;
        this.payload = payload;
    }
}
