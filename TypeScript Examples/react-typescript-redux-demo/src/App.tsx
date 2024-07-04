import "./App.css";
import Router from "./Router";
import { store } from "./redux/store/index";
import { Provider } from "react-redux";

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
