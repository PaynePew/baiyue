export const throttle = (func: Function, threshold: number = 250) => {
    let last: number;
    let deferTimer: any;
    return function (this: any) {
        let context = this;
        let now = Date.now();
        let args = arguments;
        if (last && now < last + threshold) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
                last = now;
                func.apply(context, args);
            }, threshold - (Date.now() - last));
        } else {
            last = now;
            func.apply(context, args);
        }
    };
};
