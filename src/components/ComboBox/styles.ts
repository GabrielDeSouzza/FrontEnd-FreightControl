import { styled } from 'styled-components';

export const DropDownContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
export const DropDownHeader = styled.div``;
export const DropDownListContainer = styled.div<{ isopen: boolean }>`
  display: ${(props) => (props.isopen ? 'block' : 'none')};
  position: absolute;
  top: 83%;
  height: 250px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 25rem;
`;
export const DropDownList = styled.ul`
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 25rem;
  border-radius: 0 0 5px 5px;
`;
export const ListItem = styled.span`
  font-size: 1.3em;
  width: 100%;
  &:hover {
    background-color: blanchedalmond;
  }
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;
