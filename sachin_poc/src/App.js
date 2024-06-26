import './App.css';
import Routers from './components/Routers';
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Routers />
    </Provider>
    </div>
  );
}

export default App;
