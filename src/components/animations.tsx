import styled from 'styled-components';

const Fade = styled.span`
  transition: opacity 0.2s linear;

  // exit from
  &.fade-exit {
    opacity: 1;
  }

  // exit to
  &.fade-exit-active {
    opacity: 0;
  }
`;

const Slide = styled.span`
  position: relative;

  &.slide-left-enter {
    left: -60px;
  }

  &.slide-left-enter-active {
    left: 0;
    transition: left 2s;
  }

  &.slide-right-enter {
    left: 60px;
  }

  &.slide-right-enter-active {
    left: 0;
    transition: left 2s;
  }
`;

export { Fade, Slide };
