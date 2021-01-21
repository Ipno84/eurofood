export default function isVatNumberValid(vatNumber) {
    if (vatNumber == '' || !/^[0-9]{11}$/.test(vatNumber)) return false;
    return true;
}
