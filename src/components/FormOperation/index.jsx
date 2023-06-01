import { useContext } from "react";
import { FormStyle } from "./styled";
import { Contexts } from "../../context/provider";
import {useForm} from "react-hook-form"

export default function Form(){
    const {listTransactions, setListTransactions, setId } = useContext(Contexts);
    const {
        handleSubmit,
        register,
        formState: {errors},
        } = useForm({})

    
   function setOperation(data){
           setListTransactions([
              ...listTransactions,
              {
                description: data.description,
                value: Number(data.value),
                type: data.type,
                id: setId(),
              },
            ]);
            console.log(listTransactions)
          }

    return(
        <FormStyle onSubmit={handleSubmit(setOperation)}>
            <label htmlFor="">Descrição</label>
            <input type="text" placeholder="Digite aqui sua descrição" {...register("description")}/>

            <label htmlFor="">Valor(R$)</label>
            <input type="number" placeholder="0" {...register("value")}/>

            <label htmlFor="">Tipo de Transação</label>
            <select {...register("type")}>
                <option className="in" value="In">Entrada</option>
                <option className="out" value="Out">Saída</option>
            </select>

            <button className="send" type="submit">Inserir Valor</button>
        </FormStyle>
    )
}