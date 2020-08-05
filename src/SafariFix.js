import smoothscroll from 'smoothscroll-polyfill';

const SafariFix = (props) => {
  smoothscroll.polyfill();
  return null;
}

export default SafariFix;
