const handleResize = () => {
    console.log('resizing paused');
};

const debounce = (cb, delay) => {
    let timer;
    return (...args) => {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}

window.addEventListener('resize', debounce(handleResize, 1000));