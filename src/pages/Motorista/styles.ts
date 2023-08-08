import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  margin: 5px;
  min-height: 400px;
  min-width: 80%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  background-color: #c4ebf2;
  border-radius: 15px;
`;

export const Field = styled.div`
  margin: 10px;
  width: 300px;
  height: 70px;
  border: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #a7e1f2;
  border-radius: 10px;
`;
