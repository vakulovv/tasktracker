import styled, { css } from "styled-components";

const centered = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const ModalWrapper = styled.div`
  ${centered};
  //width: 250px;
  //height: 170px;
  //background: white;
  color: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

export const Overlay = styled.div`
  background-color: rgba(18, 24, 45, 0.75);
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
`;

export const Close = styled.button`
  will-change: transform;
  position: absolute;
  right: 20px;
  top: 20px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  background-color: rgba(35, 43, 72, 0.9);
  border-radius: 50%;
  width: 60px;
  color: white;
  font-size: 2em;
  height: 60px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 0;
  transition: all 200ms;
  &:hover {
    transform: scale(1.05) rotate(180deg);
  }
`;
