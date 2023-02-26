import { useEffect, useRef, useState } from "react";

export const useThrottle = (value, delay) => {
    const [throttleValue, setThrottleValue] = useState(value);
    const start = useRef(Date.now());

    const throttle = () => {
        const handler = setTimeout(() => {
            if (Date.now() - start.current >= delay) {
                setThrottleValue(value);
                start.current = Date.now();
            }
        }, delay - (Date.now() - start.current))

        return () => {
            clearTimeout(handler)
        }
    }

    useEffect(() => {
        throttle();
    }, [value, delay])

    return throttleValue;
}