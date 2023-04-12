import React from "react";
import ReactDOM from "react-dom/client";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        {/* <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>*/}
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            {/* </PersistGate>
        </Provider> */}
    </React.StrictMode>
);