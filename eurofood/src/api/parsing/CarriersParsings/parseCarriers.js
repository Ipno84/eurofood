export default function parseCarriers(carriers) {
    const parsedCarriers = carriers
        .map(
            (
                {
                    id,
                    id_carrier,
                    name,
                    is_free,
                    delay,
                    price_without_tax,
                    price_with_tax
                },
                index
            ) => {
                const taxPercentage =
                    parseFloat(price_with_tax) / parseFloat(price_without_tax) -
                    1;
                const price =
                    Number(is_free) === 1 ? 0 : parseFloat(price_without_tax);
                return {
                    is_default: index === 0,
                    id: id ? id : id_carrier,
                    name,
                    price,
                    taxPercentage:
                        taxPercentage && !isNaN(taxPercentage)
                            ? taxPercentage
                            : 0,
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
