import { Provider } from "react-redux";
import "./App.css";
import Router from "./routers/Router";
import {store} from "./store/store"

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <Router />
        </Provider>
    </div>
  );
}

export default App;
