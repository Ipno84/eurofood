export default function parseCarriers(carriers) {
    return carriers.map(({ id, name, is_free, delay }, index) => {
        // TODO: set right price
        const price = Number(is_free) === 1 ? 0 : 4;
        return {
            is_default: index === 0,
            id,
            name,
            price,
            delay,
            active: 1
        };
    });
}
