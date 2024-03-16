import './App.css';
import { Provider } from 'react-redux';
import Store from './Companytask/Store';
import { Router } from './Companytask/Router';

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