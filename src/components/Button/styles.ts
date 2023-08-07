import styled from 'styled-components';

export const Buttom = styled.button<{backColor?: string}>`
display: flex;
flex-direction: row;
align-items: center;
cursor: pointer;
justify-content: center;
 width: 100px;
 height: 50px;
 background-color: ${props => props.backColor || '#32a4a8'};
 border-radius: 10px;
 &:hover{
    transition: background-color 200ms linear;
    background-color: #0d738f;
    color: white;
 }

`;

