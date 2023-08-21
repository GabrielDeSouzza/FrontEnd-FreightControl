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

export const SpanError = styled.span`
  margin-top: 1px;
  color: #d10202;
  font-size: 1.3rem;
  align-self: flex-start;
`;
