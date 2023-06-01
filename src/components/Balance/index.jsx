import { useContext } from "react";
import { Contexts } from "../../context/provider";
import { BalanceStyle } from "./style";

export default function Balance(){
    const {totalBalance} = useContext(Contexts);
    return(
        <BalanceStyle>
            <div className="balance">
                <p className="abstract">Valor total:</p>
                {totalBalance >= 0 ?
                 <p className="valuePositive">{totalBalance}R$</p>:
                 <p className="valueNegative">{totalBalance}R$</p>}
            </div>
            <span className="info">Valor total referente ao saldo!</span>
        </BalanceStyle>
    )
}