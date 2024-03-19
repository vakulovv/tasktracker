import styled, { css } from "styled-components";

const palette = {
  plannedColor: "#a14542",
  inProgressColor: "#af8313",
  doneColor: "#0c6037",
};

export const ListWrapper = styled.ul`
  padding: 0 1em;
  border: 2px dotted #5b7c6c;
  position: relative;
  list-style-type: none;
  min-height: 50px;
  border-radius: 6px;

  &[data-type="planned"] {
    border-color: ${palette.plannedColor};
    li {
      background: ${palette.plannedColor};
    }
  }

  &[data-type="inProgress"] {
    border-color: ${palette.inProgressColor};
    li {
      background: ${palette.inProgressColor};
    }
  }

  &[data-type="done"] {
    border-color: ${palette.doneColor};
    li {
      background: ${palette.doneColor};
    }
  }
`;
