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

    h1 {
        text-align: center;
    }

    p {
        font-weight: bold;
        color: #EE6B26
    }
`

export const QrCodeArea = styled.div`
    width: 100%;
    height: 400px;
    background: pink;
`