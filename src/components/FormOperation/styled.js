import styled from "styled-components";

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #E9ECEF;
    border-radius: 5px;
    width: 90%;
    height: 320px;
    padding-top: 20px;

input{
    width: 79%;
    height: 35px;
    border-radius: 5px;
    border: 1px solid;
    margin-bottom: 20px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    padding-left: 5px;
}

label{
    width: 80%;
    margin-bottom: 10px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
}

select{
    width: 80%;
    height: 37px;
    border-radius: 5px;
    border: 1px solid; 
    margin-bottom: 25px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    padding-left: 5px;
}

.send{
    cursor: pointer;
    width: 80%;
    height: 38px;
    background-color: #13c408;
    border: none;
    border-radius: 5px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #ffffff;
}
.send:hover{
    transition: 1s;
    color: #000000;
    border: solid 1px #000000;
}
.in{
    color: #ffffff;
    background-color: #13c408;
}

.out{
    color: #ffffff;
    background-color: #f7050d;
}
@media (min-width:769px){
    width: 80%;
    
}
`