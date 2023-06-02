import styled from "styled-components";

export const InCardStyle = styled.li`
  width: 99%;
  height: 200px;
  background-color: #f2f5f0;
  border-radius: 5px;
  margin-bottom: 20px;
  padding-left: 15px;
  border-left: solid 2px #13c408;
  .boxSize {
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: column;
    gap: 35px;
  }
  .description {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #000000;
  }
  .type {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #000000;
  }

  .value {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #000000;
  }

  .removeItem{
    cursor: pointer;
    width: 60px;
    height: 30px;
    background-color: #deccce;
    border-radius: 5px;
    border: none;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #000000;
  }
  .removeItem:hover{
    transition: 2s;
    background-color: #f03549;
  }
`;

export const OutCardStyle = styled.li`
  width: 99%;
  height: 200px;
  background-color: #f2f5f0;
  border-radius: 5px;
  margin-bottom: 20px;
  padding-left: 15px;
  border-left: solid 2px #f03549;
  .boxSize {
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: column;
    gap: 35px;
  }
  .description {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #000000;
  }
  .type {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #000000;
  }

  .value {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #000000;
  }

  .removeItem{
    cursor: pointer;
    width: 60px;
    height: 30px;
    background-color: #deccce;
    border-radius: 5px;
    border: none;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #000000;
  }
  .removeItem:hover{
    transition: 2s;
    background-color: #f03549;
  }
`;
