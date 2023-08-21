import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

export const Form = styled.form`
  margin: 5px;
  min-height: 400px;
  min-width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
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

export const Container = styled.div`
  margin: 5px;
  width: 100%;
  background-color: #8b91e8;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const TittleContainer = styled.div`
  margin-left: 10px;
  justify-self: center;
  font-size: 2rem;
  width: 100%;
`;
