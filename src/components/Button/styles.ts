import styled from 'styled-components';

export const Buttom = styled.button<{ backColor?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  width: 100px;
  max-height: 50px;
  min-height: 25px;
  background-color: ${(props) => props.backColor || '#32a4a8'};
  border-radius: 5px;
  &:hover {
    transition: background-color 200ms linear;
    background-color: #0d738f;
    color: white;
  }
  margin: 3px;
`;
