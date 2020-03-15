export default function generateArrayOfN(n = 0) {
    return Array(n + 1)
        .join(1)
        .split('');
}
