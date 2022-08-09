import styled from "styled-components";

export const Container = styled.div`
    width: 260px;
    height: 60px;
    background: ${props => props.activated ? '#EE6B26' : '#20295F'};
    padding: 10px;
    cursor: pointer;
    display: flex;

    border-radius: 10px;
    flex-direction: column;
    justify-content: space-around;

    img {
        width: 25px;
        height: 25px;
    }

    span {
        align-self: flex-end;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 18px;
        
    }

    &:hover {
        background: #EE6B26;
    }
`