import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { clockStore } from "../entities/clock";
import { App } from "../shared/ui/app";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={clockStore}>
    <App />
  </Provider>
);
