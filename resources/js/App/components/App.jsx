import React from "react";

import "./App.css";
import CardItem from "./CardItem/CardItem";
// import img from '../../assets/coverr-wood-1568650087945.jpg';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div className="WelcomeText">
                    <video autoPlay muted loop>
                        <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
                    </video>
                    <h1>
                        Shape our future<br></br> myclimate is your partner for
                        effective climate protection – both locally and globally
                    </h1>
                </div>

                <div className="CardItems">
                    <div className="CardItem-About">
                        <CardItem>About</CardItem>
                    </div>
                    <div className="CardItem-Calc">
                        <CardItem>Calculate</CardItem>
                    </div>
                    <div className="CardItem-Offset">
                        <CardItem>Offset</CardItem>
                    </div>
                </div>

                <div className="WelcomeText">
                    <h1>Calculate and offset your Emissions!</h1><br></br>
                    <h2>Searchbars for flights go here</h2>
                </div>

                <div className="WelcomeText">
                    <h1>"footcha"</h1>
                </div>
            </div>
        );
    }
}
