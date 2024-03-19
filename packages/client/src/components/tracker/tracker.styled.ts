import styled from "styled-components";

export const TrackerWrapper = styled.main`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 0;
  padding: 0;
  width: 100%;
  display: inline-block;
`;

/* Flexbox-контейнер*/
export const TasksRow = styled.div`
  display: flex;
  row-gap: 10px;
  column-gap: calc(2em - 10px);
  margin: 0 10px;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: column;

  @media only screen and (min-width: 980px) {
    flex-direction: row;
  }
`;

export const TasksCol = styled.div`
  flex: 1 1 auto;
  //flex-direction: column;
  justify-content: flex-end;
  background: #242738;
  border-radius: 6px;
  padding: 1em;
`;

export const Section = styled.section`
  margin: 2em 1em;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1b317a;
  border-radius: 50px;
  border-width: 0;
  box-shadow:
    rgba(25, 25, 25, 0.04) 0 0 1px 0,
    rgba(0, 0, 0, 0.1) 0 3px 4px 0;
  color: #ffffff;
  font-size: 1.2em;
  margin-left: auto;
  margin-right: auto;
  transition: all 200ms;

  &:hover {
    background-color: #358bec;
    transform: scale(1.05);
  }

  svg {
    margin-right: 10px;
  }
`;
