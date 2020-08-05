import smoothscroll from 'smoothscroll-polyfill';

const MobileSafariFix = (props) => {
  smoothscroll.polyfill();
  return null;
}

export default MobileSafariFix;
