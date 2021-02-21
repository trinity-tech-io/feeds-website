import * as React from "react";
import { Slide, useScrollTrigger } from "@material-ui/core";

const SlideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide
      appear={true}
      direction="right"
      in={trigger}
      mountOnEnter
      unmountOnExit
    >
      {children}
    </Slide>
  );
};

export default SlideOnScroll;
