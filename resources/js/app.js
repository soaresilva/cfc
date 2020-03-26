/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider} from 'react-redux';
import { createStore } from 'redux';

import App from "./App/Components/App.jsx";
import UserApp from './App/components/UserProfile/UserApp.jsx';
import OrganizationApp from './App/components/OrganizationProfile/OrganizationApp.jsx';

// Reducers
import flightReducer from './App/store/reducers/selectedFlight';

const store = createStore(flightReducer);

const app = <Provider store={store}><App /></Provider>

if (document.getElementById("root")) {
    ReactDOM.render(app, document.getElementById("root"));
} else if (document.getElementById("orgProfile")) {
    ReactDOM.render(
        <OrganizationApp />,
        document.getElementById("orgProfile")
    );
} else if (document.getElementById("userProfile")) {
    ReactDOM.render(
        <UserApp />,
        document.getElementById("userProfile")
    );
}
