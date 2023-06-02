import styled from "styled-components";

export const EmptyHistoricStyle = styled.section`
  width: 90%;
  min-height: 80%;
  padding-left: 15px;
  padding-bottom: 10px;
  border: 1px solid #e9ecef;
  
  .title {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 34px;
    color: #343a40;
  }
  .empty {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 34px;
    color: #000000;
  }

  @media (min-width: 769px) {
    width: 50%;
    min-height: 420px;
  }
`;

export const HistoricStyle = styled.section`
  width: 90%;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  border: 1px solid #e9ecef;

  .sectionTitle {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 34px;
    color: #000000;
  }
  .navFilters {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 10%;
  }
  .filter {
    cursor: pointer;
    width: 80%;
    height: 38px;
    background-color: #13c408;
    border: none;
    border-radius: 5px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #ffffff;
  }

  .filter:hover {
    transition: 1s;
    color: #000000;
    border: solid 1px #000000;
  }
  .cardsContainer{
    display: flex;
    margin-top: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 769px) {
    width: 49.3%;
    min-height: 420px;
  }
`;
