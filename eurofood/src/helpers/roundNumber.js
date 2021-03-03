export default function roundNumber(num, to = 6) {
    return (Math.round((num + Number.EPSILON) * 100) / 100).toFixed(to);
}
