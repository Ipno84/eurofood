import { useEffect, useRef } from 'react';

export default function useComponentMounted() {
    const componentIsMounted = useRef(true);
    useEffect(() => {
        return () => {
            componentIsMounted.current = false;
        };
    }, []);
    return componentIsMounted.current;
}
