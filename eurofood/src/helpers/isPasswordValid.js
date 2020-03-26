export default function isPasswordValid(password) {
    // at least one number, one lowercase and one uppercase letter
    // at least six characters that are letters, numbers or the underscore
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
    return re.test(password);
}
