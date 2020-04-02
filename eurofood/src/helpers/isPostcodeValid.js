export default function isPostcodeValid(postcode) {
    if (String(postcode).length !== 5) return false;
    return /^\d*\.?\d*$/.test(postcode);
}
