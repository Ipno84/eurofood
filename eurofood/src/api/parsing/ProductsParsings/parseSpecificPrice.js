export default function parseSpecificPrice(specificPrice) {
    return {
        ...specificPrice,
        id: Number(specificPrice.id_specific_price)
    };
}
