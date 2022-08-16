import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #20295F;

    border-bottom: 5px solid #EE6B26;
    
    display: flex;
`
// logo
export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 20px;

    img {
        height: 50px;
    }
`
// links
export const RigthSide = styled.div`
    width: 50%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 20px;

    a, button {
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        text-decoration: none;
        margin: 0 10px;

        transition: opacity .3s;

        &:hover{
            color: #EE6B26;
            opacity: .7;
        }
    }
    
    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    #notification {
        img {
            width: 25px;
            height: 30px;
        }

        span {
            color: #EE6B26;
            background: #fff;
            padding: 1px 5px;
            border-radius: 50%;
            position: relative;
            bottom: 18px;
            right: 15px;
        }

        transition: opacity .3s;

        &:hover{
            color: #EE6B26;
            opacity: .7;
        }
    }

    .divider::after{
        content: "|";
        margin: 0 10px;
        color: #fff
    }

    /*button {
        font-size: 18px;
        font-weight: bold;
        color: #fff;
    }*/
`

