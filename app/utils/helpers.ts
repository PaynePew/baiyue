export const throttle = (func: Function, threshold: number = 250) => {
    let last: number;
    let deferTimer: any;
    return function (this: any) {
        let now = Date.now();
        let args = arguments;
        if (last && now < last + threshold) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function (this: any) {
                last = now;
                func.apply(this, args);
            }, threshold - (Date.now() - last));
        } else {
            last = now;
            func.apply(this, args);
        }
    };
};

export const debounce = (func: Function, wait: number, immediate: boolean): (() => void) => {
    let timeout: NodeJS.Timeout | null;
    return function (this: any, ...args: any[]) {
        let later = () => {
            timeout = null;
            if (!immediate) func.apply(this, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout as NodeJS.Timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply((this, args));
    };
};
