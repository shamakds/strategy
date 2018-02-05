import ReactDOM from "react-dom";
import React from "react";
import $ from "jquery";
import App from "./src/app";

$(document).ready(function() {
    const content = document.getElementById("z-app-container");

    ReactDOM.render(
        <App id={"z-app"} />,
        content
    );
});