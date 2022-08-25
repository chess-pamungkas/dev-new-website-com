import { useSpring } from "react-spring";
import { TWP_SECTION_CONFIG_BG, setPositionY } from "../../helpers/animation.config";

export const useSectionAnimation = (
  elementIntersectionRef,
  elementInitialPositionY
) => useSpring({
  ...TWP_SECTION_CONFIG_BG,
  from: setPositionY(elementInitialPositionY),
  to: elementIntersectionRef?.isIntersecting ? setPositionY(0) : setPositionY(elementInitialPositionY)
});
