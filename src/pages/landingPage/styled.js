import styled from "styled-components";

export const HeaderStyle = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;
    .logoDev{
        color: #13c408;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 34px;
    }
    .logoBank{
        color: #000000;
    }

`

export const LandingPageMainStyle = styled.main`
    height: 89vh;
    display: flex;

    .message{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 32px; 
        width: 80%;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .messageInfo{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 16px; 
        width: 80%;
        margin-bottom: 90px;
    }
    .left{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .rigth{  
        display: none;
    }
    .logIn{
        width: 75%;
        height: 40px;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        background-color: #13c408;
        color: #ffffff;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
    }
    .logIn:hover{
        color: #000000;
        border: solid 1px #000000;
        transition: 1s;
    }

    @media (min-width:769px){
        .left{
            width: 50%;
        }
        .rigth{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 100%;
        }

        .money{
        width: 40%;
        height: 60%;
        }

        .message{
        width: 45%;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .messageInfo{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 16px; 
        width: 50%;
        margin-bottom: 50px;
    }
    .logIn{
        width: 50%;
    }

}
`
export const FooterStyle = styled.footer`
    background-color: #000000;
    color: #ffffff;
    height: 3vh;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`