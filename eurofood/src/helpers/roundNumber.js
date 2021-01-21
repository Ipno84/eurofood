export default function roundNumber(num) {
    return (Math.round((num + Number.EPSILON) * 100) / 100).toFixed(6);
}
