
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import Counter from './components/Counter';
import { mainReducer } from './redux/reducers';

const store = createStore(mainReducer);
function App() {

  // console.log("hii",store.getState());


  return (
    <Provider store={store}>
      
      <Counter />

     </Provider>
  );
}

export default App;
