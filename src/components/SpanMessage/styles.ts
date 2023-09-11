import { Buttom } from 'components/Button/styles';
import styled from 'styled-components';
import { IMessageResult } from 'types/IMessageResults';

export const Wrapper = styled.div<{ isvisible?: boolean }>`
  display: ${(props) => (props.isvisible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  font-size: 18px;
  border-radius: 10px;
`;
export const Span = styled.span<{ isSucess?: boolean }>`
  margin-top: 1px;
  color: ${(props) => (props.isSucess ? '#30e661' : '#d10202')};
  font-size: 11.3 rem;
  align-self: flex-start;
  margin-bottom: 5px;
`;

export const Button = styled(Buttom)<{ visible: boolean }>``;
