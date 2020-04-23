export default function stringifyReducerState(state) {
    return `{${Object.keys(state)
        .map(key => {
            const obj = state[key];
            return `${JSON.stringify(key)}:${JSON.stringify(obj)}`;
        })
        .join(',')}}`;
}
