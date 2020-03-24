/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App/Components/App.jsx";
import UserReactExample from './App/components/UserReactExample';
import OrganizationReactExample from './App/components/OrganizationReactExample';

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
} else if (document.getElementById("orgProfile")) {
    ReactDOM.render(
        <OrganizationReactExample />,
        document.getElementById("orgProfile")
    );
} else if (document.getElementById("userProfile")) {
    ReactDOM.render(
        <UserReactExample />,
        document.getElementById("userProfile")
    );
}
