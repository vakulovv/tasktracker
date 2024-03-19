import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { Provider } from "react-redux";
import Tracker from "@components/tracker";
import store from "./store";

ReactDOM.hydrateRoot(
  document.getElementById("root")!,
  <Provider store={store}>
    <Tracker />
  </Provider>,
);
