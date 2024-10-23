import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import "./styles/generalStyles.css";
import Header from "./components/Header.jsx";
import Game from "./components/Game";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Game />
      </div>
    </Provider>
  );
};

export default App;
