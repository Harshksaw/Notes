function useDebounce(cb, delay = 200) {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb(...args);
        }, delay)
    }
}

export default useDebounce;
