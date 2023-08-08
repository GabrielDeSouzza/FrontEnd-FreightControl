import styled from 'styled-components';

export const Wrapper = styled.main`
    height: 100%;
    width: 100%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.form`
display: flex;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    min-height: 40%;
    min-width: 40%;
    background-color: #999cbf;
    max-width: 95%;
    flex-direction: column;
    border-radius: 10px;
`;

export const InputsArea = styled.div<{ renderAsColumn?:boolean}>`
    flex-direction: ${props => props.renderAsColumn? "column" : "row"};
    margin: 10px;
`
export const spanError = styled.span`
    color: #870503;
    font-size: 1.4em;
`



