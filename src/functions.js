export const scrollTo = (offset, smooth, callback) => {
  const fixedOffset = parseInt(offset.toFixed());
  const onScroll = () => {
    const newScrollVal = window.pageYOffset.toFixed();
    if (newScrollVal <= fixedOffset + 1 && newScrollVal >= fixedOffset - 1) {
      window.removeEventListener('scroll', onScroll);
      callback();
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
  window.scrollTo({
    top: offset,
    behavior: smooth ? 'smooth' : 'auto'
  });
}