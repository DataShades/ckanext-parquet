import "hightable/src/HighTable.css";
import "hyperparam/global.css";
import "hyperparam/hyperparam.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("hyparquet-root");
    if (!app) throw new Error("missing app element");

    const resourceUrl = app.dataset.url;

    if (!resourceUrl) console.warn("No resource URL provided");

    ReactDOM.createRoot(app).render(
        <StrictMode>
            <App fileUrl={resourceUrl!} />
        </StrictMode>
    );
});
