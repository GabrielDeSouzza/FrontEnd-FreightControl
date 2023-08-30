import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const Input = styled.input`
  padding: 2px;
  font-size: 1.5em;
  height: 3rem;
  width: 25rem;
  border-radius: 5px;
  border-style: none;
`;

export const Label = styled.label`
  font-size: 1.5em;
  width: 25rem;
`;

export const SpanError = styled.span`
  margin-top: 1px;
  color: #d10202;
  font-size: 1.3rem;
  align-self: flex-start;
`;
