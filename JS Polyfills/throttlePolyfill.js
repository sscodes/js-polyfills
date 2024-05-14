const handleResize = () => {
  console.log('resizing paused');
};

const throttle = (cb, delay) => {
  let start = 0;
  return (...args) => {
    let now = Date.now();
    if (now - start >= delay) {
      start = now;
      cb(...args);
    }
  };
};

window.addEventListener('resize', throttle(handleResize, 1000));
