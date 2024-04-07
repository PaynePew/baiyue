import { throttle } from "~/utils/helpers";
import { useEffect, useState } from "react";

export interface scrollData {
    x: number;
    y: number;
    lastX: number;
    lastY: number;
    slideInAt: number;
}

export default function useScrollListener() {
    const [data, setData] = useState<scrollData>({
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0,
        slideInAt: 0,
    });

    useEffect(() => {
        const handleScroll = () => {
            setData(last => {
                return {
                    x: window.scrollX,
                    y: window.scrollY,
                    lastX: last.x,
                    lastY: last.y,
                    slideInAt: window.scrollY + window.innerHeight,
                };
            });
        };
        const throttledScroll = throttle(handleScroll);
        throttledScroll();
        window.addEventListener("scroll", throttledScroll);
        return () => {
            window.removeEventListener("scroll", throttledScroll);
        };
    }, []);

    return data;
}
