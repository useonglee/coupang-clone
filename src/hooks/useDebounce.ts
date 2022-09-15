/**
 *
 * @param callbackFunc
 * @param wait
 * @returns
 *
 * callbackFunc를 통해 상태 관리
 * wait 시간 이후 상태 업데이트
 */
const useDebounce = (callbackFunc: () => void, wait: number) => {
  let timeout: NodeJS.Timeout | null;

  return (...args: []) => {
    const context = this;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      callbackFunc.apply(context, args);
    }, wait);
  };
};

export default useDebounce;
