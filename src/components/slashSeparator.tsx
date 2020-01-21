import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Fade } from './animations';

const SlashSeparator = () => (
  <CSSTransition mountOnEnter in timeout={200} classNames="fade" unmountOnExit>
    <Fade>/</Fade>
  </CSSTransition>
);

export default SlashSeparator;
