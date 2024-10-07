import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from "react-router-dom";

import "./index.css";

import Homepage from "./views/Homepage";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Homepage />
        </Router>
    </React.StrictMode>
);
