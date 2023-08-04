import styled from 'styled-components';

export const Buttom = styled.button<{backColor?: string}>`
display: flex;
flex-direction: row;
align-items: center;

justify-content: center;
 width: 100px;
 height: 50px;
 background-color: ${props => props.backColor || "orange"};
 border-radius: 10px;
 &:hover{
    transition: background-color 200ms linear;
    background-color: black;
    color: white;
 }

`;

