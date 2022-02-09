import react from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./Components/App";
import store from "./Redux/store";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
