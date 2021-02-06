export default function parseCarriers(carriers) {
    const parsedCarriers = carriers
        .map(
            (
                { id, id_carrier, name, is_free, delay, price_without_tax },
                index
            ) => {
                const price =
                    Number(is_free) === 1 ? 0 : parseFloat(price_without_tax);
                return {
                    is_default: index === 0,
                    id: id ? id : id_carrier,
                    name,
                    price,
                    delay,
                    active: 1
                };
            }
        )
        .filter(
            parsedCarrier =>
                typeof parsedCarrier.price !== 'undefined' &&
                !isNaN(parsedCarrier.price)
        );
    return parsedCarriers;
}
