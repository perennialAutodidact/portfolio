export function throttle<T extends (...args: any[]) => void>(
  fn: T,
  threshold = 250,
  scope?: any,
): (...args: Parameters<T>) => void {
  let last: number | undefined;
  let deferTimer: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: Parameters<T>) {
    const context = scope || this;
    const now = Date.now();

    if (last && now < last + threshold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(() => {
        last = now;
        fn.apply(context, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
