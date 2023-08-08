import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchArea = styled.div`
  margin-top: 20px;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 200px;
`;

export const Container = styled.main`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  height: 150px;
  width: 300px;
  background-color: #324aa8;
  margin: 5px;
  border-radius: 10px;
`;

export const linkFromContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: 2em;
  &:hover {
    transition: background-color 200ms linear;
    transition: color 200ms linear;
    background-color: #0d738f;
    color: white;
    border-radius: 10px;
  }
`;

export const Image = styled.img`
  width: 100px;
  margin: 0;
`;
