import './App.css';
import ContextsProvider from './context/provider';
import RoutesMain from './routes';

function App() {
  return (
    <>
      <ContextsProvider>
        <RoutesMain/>
      </ContextsProvider>
    </>
  );
}

export default App;
