import { renderToString } from "react-dom/server";
import App from "./src/app";
import { Provider } from "react-redux";
import store from "./src/store";

export async function render() {
  return renderToString(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}
