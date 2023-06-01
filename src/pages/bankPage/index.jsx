import Header from '../../components/Header'
import Form from '../../components/FormOperation'
import { MainStyle } from './style';
import Historic from '../../components/Historic';
import Balance from "../../components/Balance"

export default function BankPage() {
    return (
      <>
        <Header/>
        <MainStyle>
          <div className='accountOperation'>
            <Form/>
            <Balance/>
          </div>
          <Historic/>
        </MainStyle>  
      </>
    );
  }