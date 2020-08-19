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

export const trimSlashes = (pathName) => {
  if (pathName[0] === '/') pathName = pathName.slice(1);
  if (pathName.slice(-1) === '/') pathName = pathName.slice(-1);
  if (pathName.includes('/')) pathName = pathName.slice(0, pathName.indexOf('/'));
  return pathName;
}

export const getBrowserLocales = (options = {}) => {
  const defaultOptions = {
    languageCodeOnly: false,
  };

  const opt = {
    ...defaultOptions,
    ...options,
  };

  const browserLocales =
    navigator.languages === undefined
      ? [navigator.language]
      : navigator.languages;

  if (!browserLocales) {
    return undefined;
  }

  return browserLocales.map(locale => {
    const trimmedLocale = locale.trim();

    return opt.languageCodeOnly
      ? trimmedLocale.split(/-|_/)[0]
      : trimmedLocale;
  });
}