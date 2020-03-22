export default function generateArrayChunk(array, chunkCount) {
    return array
        .map((x, i) => array.slice(i * chunkCount, i * chunkCount + chunkCount))
        .filter(e => e.length);
}
