export default function fixPrice(
    value = 0,
    parse = false,
    fixValue = 0,
    replaceDot = false
) {
    let price = value;
    if (parse) price = parseFloat(price);
    if (fixValue) price = price.toFixed(fixValue);
    if (replaceDot) price = price.replace('.', ',');
    return price;
}
