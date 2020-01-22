import styled from 'styled-components';

const Fade = styled.span`
  transition: opacity 0.2s linear;

  // enter to
  &.fade-enter {
    opacity: 0;
  }

  // enter from
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 0.5s;
  }

  // exit from
  &.fade-exit {
    opacity: 1;
  }

  // exit to
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 0.5s;
  }
`;

const Slide = styled.span`
  position: relative;

  &.slide-left-enter {
    left: -10px;
  }

  &.slide-left-enter-active {
    left: 0;
    transition: left 2s;
  }

  &.slide-right-enter {
    left: 10px;
  }

  &.slide-right-enter-active {
    left: 0;
    transition: left 2s;
  }
`;

export { Fade, Slide };
