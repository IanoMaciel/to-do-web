import styled from "styled-components";


export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        text-align: center;
        margin-bottom: 0;
    }

    p {
        text-align: center;
        font-weight: bold;
        color: #EE6B26
    }
`

export const QrCodeArea = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
`

export const CodeValidation = styled.div`
    display: flex;
    flex-direction: column;
    
    margin: 10px;

    span {
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
    }

    input {
        font-size: 18px;
        padding: 10px 15px;
        margin: 5px 0;

        border-radius: 10px;
        border: 1px solid #000;
        outline: 0;
        text-align: center;
    }

    button {
        color: #fff;
        font-weight: bold;
        padding: 10px 15px;
        font-size: 18px;

        background: #EE6B26;
        border: none;
        border-radius: 10px;

        cursor: pointer;
        margin-top: 10px;
        margin-bottom: 70px;

        transition: opacity .3s;

        &:hover{
            opacity: .7;
        }
    }

`