import { useNavigate } from "react-router-dom";
import { FooterStyle, HeaderStyle, LandingPageMainStyle } from "./styled";

export default function LandingPage(){
    const navigate = useNavigate();
    return(
        <>
        <HeaderStyle>
            <h1 className="logoDev">Dev <span className="logoBank">Balance</span></h1>
        </HeaderStyle>
        <LandingPageMainStyle>
            <div className="left">
                <h2 className="message">Centralize o controle das suas finanças</h2>
                <p className="messageInfo">de forma rápida e segura</p>
                <button onClick={()=>navigate("/bank")} className="logIn">Iniciar</button>
            </div>
            <div className="rigth">
                <img className="money" src="https://cdn-icons-png.flaticon.com/512/2916/2916115.png" alt="Foto de Cédulas de dinheiro" />
            </div>
        </LandingPageMainStyle>
        <FooterStyle>
            <div>Esta é uma aplição Front-End para controle financeiro</div>
        </FooterStyle>
        </>
    )
}