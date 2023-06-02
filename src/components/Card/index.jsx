import { InCardStyle, OutCardStyle } from "./style";

export default function Card({
  transaction,
  listTransactions,
  setListTransactions,
}) {
  function removeItem() {
    const result = listTransactions.filter((item) => {
      return item.id !== transaction.id;
    });
    setListTransactions(result);
  }
  return transaction.type === "In" ? (
    <InCardStyle>
      <div className="boxSize">
        <h2 className="description">{transaction.description}</h2>
        <span className="type">Entrada</span>
        <p className="value">R$: {transaction.value.toFixed(2)}</p>
        <button className="removeItem" onClick={()=> removeItem()}>Excluir</button>
      </div>
    </InCardStyle>
  ) : (
    <OutCardStyle>
      <div className="boxSize">
        <h2 className="description">{transaction.description}</h2>
        <span className="type">Saida</span>
        <p className="value">R$: {transaction.value.toFixed(2)}</p>
        <button className="removeItem" onClick={()=> removeItem()}>Excluir</button>
      </div>
    </OutCardStyle>
  );
}
