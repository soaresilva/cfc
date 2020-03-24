import React from "react";

import "./App.css";
import CardItem from "./UI/CardItem/CardItem";
import LandingPage from './../containers/LandingPage/LandingPage';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <video playsInline autoPlay muted loop className="Video">
                    <source
                        src="/videos/coverr-wood-1568650087945.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="WelcomeText">
                    <h1 className="WelcomeTitle">
                        Carbon Footprint Calculator
                    </h1>
                    <h1 className="WelcomeDescription">
                        Shape our future<br></br> myclimate is your partner for
                        effective climate protection – both locally and globally
                    </h1>
                </div>
                <div className="Section-CardItems">
                    <div className="CardItems">
                        <div className="CardItem-About">
                            <CardItem>About us</CardItem>
                        </div>
                        <div className="CardItem-Calc">
                            <CardItem>Calculate</CardItem>
                        </div>
                        <div className="CardItem-Offset">
                            <CardItem>Offset</CardItem>
                        </div>
                    </div>
                </div>

                <div className="SearchSection">
                    <h1>Calculate and offset your Emissions!</h1>
                    <br></br>
                    <LandingPage />
                </div>

            
                <div className="WelcomeText">
                    <h1>"footcha"</h1>
                </div>
            </div>

        );
    }
}
