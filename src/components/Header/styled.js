import styled from "styled-components";

export const HeaderStyle = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F8F9FA;
    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
    height: 70px;
    gap: 35%;
    
    .logoDev{
        color: #13c408;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 34px;
    }
    .logoBank{
        color: #000000;
    }

    .logOut{
        cursor: pointer;
        height: 38px;
        width: 55px;
        border: none;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        background-color: #E9ECEF;
        border-radius: 5px;
    }

    .logOut:hover{
        transition: 1s;
        background-color: #13c408;
        border: solid 1px #000000;
    }

    @media (min-width:769px){
        gap: 60%;
    }
`