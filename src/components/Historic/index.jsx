import { useContext } from "react";
import { Contexts } from "../../context/provider";
import { EmptyHistoricStyle, HistoricStyle } from "./styled";
import Card from "../Card";

export default function Historic() {
  const { listTransactions, setListTransactions, filtered, setFiltered } =
    useContext(Contexts);
  return listTransactions.length === 0 ? (
    <EmptyHistoricStyle className="oi">
      <h2 className="title">Resumo financeiro</h2>
      <p className="empty">Você ainda não possui um lançamento</p>
    </EmptyHistoricStyle>
  ) : (
    <HistoricStyle>
      <h3 className="sectionTitle">Resumo financeiro</h3>
      <nav className="navFilters">
        <button className="filter" onClick={() => setFiltered("All")}>
          Todos
        </button>
        <button className="filter" onClick={() => setFiltered("In")}>
          Entradas
        </button>
        <button className="filter" onClick={() => setFiltered("Out")}>
          Despesas
        </button>
      </nav>
      <ul className="cardsContainer">
        {listTransactions
          .filter((transaction, index) => {
            if (filtered === "All") {
              return true;
            }
            return transaction.type === filtered;
          })
          .map((transaction, index) => (
            <Card
              transaction={transaction}
              listTransactions={listTransactions}
              key={index}
              setListTransactions={setListTransactions}
            />
          ))}
      </ul>
    </HistoricStyle>
  );
}
