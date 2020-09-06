export function throttle<T extends Function>(f: T, wait: number): T {
    let isCalled = false

    return (function (...args: any[]) {
        if (!isCalled) {
            f(...args)
            isCalled = true
            setTimeout(function () {
                isCalled = false
            }, wait)
        }
    } as any) as T
}
