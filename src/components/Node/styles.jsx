import styled, { css } from 'styled-components';

const specialNodeStyles = css`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  animation-name: specialNodes;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
  border: 2px solid yellow !important;
`;

export const Node = styled.td`
  border: 1px solid rgb(175, 216, 248);
  width: 25px;
  height: 25px;

  &.node-start {
    background-image: url(/img/start.svg);
    ${specialNodeStyles}
  }

  &.node-end {
    background-image: url(/img/finish.svg);
    ${specialNodeStyles}
  }

  @keyframes specialNodes {
    0% {
      transform: scale(0.5);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }

  &.node-visited {
    animation-name: visitedAnimation;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes visitedAnimation {
    0% {
      transform: scale(0.25);
      background-color: rgba(0, 255, 179, 0.55);
      border-radius: 100%;
    }

    50% {
      background-color: rgba(22, 172, 127, 0.6);
    }

    75% {
      transform: scale(1.2);
      background-color: rgba(20, 119, 89, 0.8);
    }

    100% {
      transform: scale(1);
      background-color: rgba(0, 0, 0, 0.7);
      /* border-radius: 0; */
    }
  }

  &.node-instant-visited {
    background-color: rgba(0, 0, 0, 0.9);
    border-color: #c0c0c0;
  }

  &.node-instant-shortest-path {
    background-color: rgb(100, 16, 255);
    border-color: rgb(100, 16, 255);
    animation-name: instantShortestPath;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-direction: alternate-reverse;
    animation-iteration-count: infinite;
  }

  @keyframes instantShortestPath {
    0% {
      background-color: #813dff;
      border-color: #813dff;
    }

    50% {
      background-color: #7124ff;
      border-color: #7124ff;
    }

    100% {
      background-color: rgb(89, 0, 255);
      border-color: rgb(89, 0, 255);
    }
  }

  &.node-shortest-path {
    animation-name: shortestPath;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-direction: alternate-reverse;
    animation-iteration-count: infinite;
  }

  @keyframes shortestPath {
    0% {
      transform: scale(1);
      background-color: rgb(0, 255, 170);
      border-color: rgb(0, 255, 170);
    }

    25% {
      transform: scale(0.975);
      background-color: rgb(101, 255, 204);
    }

    50% {
      transform: scale(0.95);
      background-color: rgb(101, 255, 204);
    }

    75% {
      transform: scale(0.975);
      background-color: rgb(101, 255, 204);
    }

    100% {
      transform: scale(1);
      background-color: rgb(0, 255, 170);
      border-color: rgb(0, 255, 170);
    }
  }

  &.node-wall {
    animation-name: wallAnimation;
    animation-duration: 0.2s;
    animation-timing-function: ease-in;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }

  @keyframes wallAnimation {
    0% {
      transform: scale(0.3);
      background-color: rgb(0, 100, 143);
    }

    50% {
      transform: scale(1.2);
      background-color: rgb(0, 100, 143);
    }

    100% {
      transform: scale(1);
      background-color: rgb(0, 100, 143);
      border-color: rgb(0, 100, 143);
    }
  }
`;
