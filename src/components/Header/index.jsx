import { useNavigate } from "react-router-dom";
import { HeaderStyle } from "./styled";

export default function Header(){
    const navigate = useNavigate()
    return (
    <HeaderStyle>
        <h1 className="logoDev">Dev <span className="logoBank">Balance</span></h1>
        <button className="logOut" onClick={()=>navigate("/")}>Início</button>
    </HeaderStyle>
    )
}