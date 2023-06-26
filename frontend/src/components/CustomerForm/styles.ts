import styled from "styled-components";

const FieldGroup = styled.label`
  display: flex;
  flex-direction: column;

  span {
    font-weight: bold;
  }
`;

const FieldError = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  color: #ff0000;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    font-weight: bold;
  }
`;

const Radio = styled.div`
  display: inline-block;

  span {
    font-weight: normal;
  }
`;

export { FieldGroup, FieldError, RadioGroup, Radio };
