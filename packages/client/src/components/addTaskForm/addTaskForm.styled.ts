import styled from "styled-components";

export const FormWrapper = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  flex-wrap: wrap;
`;

export const FormSection = styled.div``;
export const Input = styled.input`
  display: block;
  font-size: 2em;
  width: 100%;
  line-height: 1.5em;
  margin-bottom: 28pt;
  border: none;
  border-bottom: 5px solid #3f466b;
  background: none;

  padding-left: 5px;
  outline: none;
  color: #ffffff;
  font-family: Montserrat, serif;
  font-weight: lighter;

  &:active,
  &:hover,
  &:focus {
    transition: box-shadow 0.3s linear;
  }
`;

export const Select = styled.select`
  display: block;
  font-size: 2em;
  width: 100%;
  line-height: 1.5em;
  margin-bottom: 28pt;
  border: none;
  border-bottom: 5px solid #3f466b;
  background: none;

  padding-left: 5px;
  outline: none;
  color: #ffffff;
  font-family: Montserrat, serif;
  font-weight: lighter;

  &:active,
  &:hover,
  &:focus {
    transition: box-shadow 0.3s linear;
  }
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
`;
