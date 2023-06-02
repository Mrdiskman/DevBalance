import styled from "styled-components";

export const MainStyle = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    gap: 20px;
    height: 100%;

    .accountOperation{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content:center ;
        align-items: center;
    }
    @media (min-width:769px){
    flex-direction: row;
    align-items: flex-start;
    gap: 0px;
    padding-top: 50px;
    .accountOperation{
        height: 440px;
        width: 30%;
        align-items: start;
        margin-left: 9%;
    }
}
`