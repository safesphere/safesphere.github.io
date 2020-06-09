export function throttle(callback: Function, limit: number) {
  let lastFunc: number;
  let lastRan: number;

  return function () {
    const context = window;
    const args = arguments;
    if (!lastRan) {
      callback.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = window.setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          callback.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
