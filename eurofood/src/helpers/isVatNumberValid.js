export default function isVatNumberValid(vatNumber) {
    if (vatNumber == '') return false;
    else if (!/^[0-9]{11}$/.test(vatNumber)) return false;
    else {
        let s = 0;
        for (i = 0; i <= 9; i += 2) {
            s += vatNumber.charCodeAt(i) - '0'.charCodeAt(0);
        }
        for (i = 1; i <= 9; i += 2) {
            var c = 2 * (vatNumber.charCodeAt(i) - '0'.charCodeAt(0));
            if (c > 9) c = c - 9;
            s += c;
        }
        var controllo = (10 - (s % 10)) % 10;
        if (controllo != vatNumber.charCodeAt(10) - '0'.charCodeAt(0))
            return true;
        else return false;
    }
}
