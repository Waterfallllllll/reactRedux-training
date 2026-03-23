import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import reducer from "./reducer.jsx";
import "./index.css";
import App from "./components/App.jsx";
import { Provider } from "react-redux";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
);
    