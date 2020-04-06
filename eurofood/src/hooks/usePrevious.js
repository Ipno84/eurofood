import { useEffect, useRef } from 'react';

export default function usePrevious(value, notSame) {
    const ref = useRef();
    useEffect(() => {
        if (!notSame || (notSame && ref.current !== value)) {
            ref.current = value;
        }
    }, [value, notSame]);
    return ref.current;
}
