import logo from './logo.svg';
import './App.css';
import {provider} from 'react-redux';
import store from './redux/store'
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <provider store ={store }>
      <div className="App">
      <CakeContainer />
    </div>
    </provider>
    
  );
}

export default App;
