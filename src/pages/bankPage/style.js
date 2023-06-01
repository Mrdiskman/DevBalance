import styled from "styled-components";

export const MainStyle = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    gap: 20px;

    .accountOperation{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media (min-width:769px){
    flex-direction: row;
    gap: 0px;
    padding-top: 50px;
    .accountOperation{
        width: 55%;
        align-items: start;
        padding-left: 210px;
    }
}
`