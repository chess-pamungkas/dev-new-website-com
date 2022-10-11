import { animateScroll } from "./animate-scroll";

export const scrollTo = ({
  ref = null,
  headerRef = null,
  duration = 1000,
  callback,
}) => {
  if (!ref) {
    return;
  }

  animateScroll({
    targetPosition:
      typeof ref === "number"
        ? ref - (headerRef?.current ? headerRef?.current.clientHeight : 0)
        : ref?.current.offsetTop -
          (headerRef?.current ? headerRef?.current.clientHeight : 0),
    initialPosition: window.scrollY,
    duration,
  });

  if (typeof callback !== "undefined") {
    setTimeout(() => {
      callback();
    }, duration);
  }
};
