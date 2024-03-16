import './App.css';
import { Provider } from 'react-redux';
import Store from './Store';
import { Router } from './Router';

function App() {
  return (
    <div className="">
      <Provider store={Store}>
       <Router/>
      </Provider>
    </div>
  );
}

export default App;