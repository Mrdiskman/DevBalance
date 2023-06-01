import styled from "styled-components";

export const BalanceStyle = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 padding-left: 15px;
 width: 86%;
 height: 80px;
 margin-top: 15px;
 border: 1px solid #E9ECEF;
 border-radius: 5px;
 .abstract{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    margin-bottom: 10px;
 }
 .info{
   font-family: 'Nunito';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
 }
 .valuePositive{
   color: #13c408;
 }

 .valueNegative{
   color: #fc030f;
 }
 .balance{
   display: flex;
   gap: 10%;
   font-family: 'Nunito';
   font-style: normal;
   font-weight: 700;
   font-size: 16px;
 }

 @media (min-width:769px){
    width: 53%;
}
`