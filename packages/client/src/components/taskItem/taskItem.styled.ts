import styled from "styled-components";

export const TaskWrapper = styled.li`
  padding: 1em;
  background: #3f466b;
  border-radius: 6px;
  cursor: grab;
  margin: 1em 0;

  &:hover {
  }

  svg {
    position: absolute;
    right: 40px;
    cursor: pointer;

    * {
      pointer-events: none;
    }
  }
`;
