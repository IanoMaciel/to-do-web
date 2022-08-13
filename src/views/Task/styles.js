import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div`
    width: 50%;    
    margin-bottom: 70px;
`

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;


    .inative {
        opacity: 0.5;
    }

    button {
        background: none;
        border: none;
    }

    img {
        width: 55px;
        height: 55px;
        margin: 10px;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            opacity: 0.5;
        }
        
    }
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0px 0;

    span {
        color: #707070;
        font-size: 20px;
        margin: 5px 0;
    }

    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #000;
        outline: 0;
    }
`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span {
        color: #707070;
        font-size: 20px;
        margin: 5px 0;
    }

    textarea {
        font-size: 16px;
        border: 1px solid #000;
        outline: 0;
        padding: 15px;
    }
`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    button {
        font-weight: bold;
        color: #20295F;
        border: none;
        background: none;
        cursor: pointer;
        font-size: 18px;
        &:hover {
            opacity: 0.7;
        }
    }

    div {
        display: flex;
        align-items: center;
        color: #EE6B26;
        font-weight: bold;
        font-size: 18px;
    }
`

export const Save = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    button {
        width: 100%;
        padding: 10px;
        background: #EE6B26;
        border-radius: 10px;
        border: none;

        font-size: 18px;
        font-weight: bold;
        color: #fff;
    
        cursor: pointer;    

        &:hover {
            opacity: 0.7;
        }
    }
`