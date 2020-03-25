import React from "react";

import "./Flight.css";

const flight = props => {
    const {
        cityFrom,
        cityTo,
        fly_duration,
        dTime,
        aTime,
        route
    } = props;
    const dateDepart = new Date(dTime * 1000).toDateString();
    const timeDepart = new Date(dTime * 1000).toTimeString().slice(0, 18);
    const dateArrival = new Date(aTime * 1000).toDateString().slice(0, 18);
    const timeArrival = new Date(aTime * 1000).toTimeString().slice(0, 18);


    let newArr = [];
    let result = null;
    const haversineDistance = (lat1, lat2, lon2, lon1) => {
        var R = 6371; // km
        const pi = Math.PI;
        var φ1 = lat1 / (180 / pi);
        var φ2 = lat2 / (180 / pi);
        var Δφ = (lat2 - lat1) / (180 / pi);
        var Δλ = (lon2 - lon1) / (180 / pi);
        var a =
            Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = (R * c).toFixed(2);
        newArr.push(Number(d));
        result = newArr.reduce((a, b) => a + b);
        console.log('newArr', newArr);
        console.log('result', result);
    };

    let stopovers = null;
    let latFrom, latTo, lngFrom, lngTo;
    if (route.length > 1) {
        stopovers = route.slice(0, route.length - 1).map(stopover => {
            const randomNum = Math.random();
            return (
                <div key={`${stopover.cityTo}-${randomNum}`}>
                    <h3 className="FlightInfo">Stopover:</h3>
                    <h6 className="FlightTime">{stopover.cityTo}</h6>
                </div>
            );
        });
        for (const index in route) {
            latFrom = route[index].latFrom;
            latTo = route[index].latTo;
            lngTo = route[index].lngTo;
            lngFrom = route[index].lngFrom;
            haversineDistance(latFrom, latTo, lngFrom, lngTo);
        }
    }

    return (
        <div className="Flight">
            <div>
                <h1 className="FlightTitle">{cityFrom}</h1>
                <h3 className="FlightInfo">Departure:</h3>
                <h4 className="FlightTime">{dateDepart}</h4>
                <h4 className="FlightTime">{timeDepart}</h4>
            </div>
            <div>
                <h1 className="FlightTitle">{cityTo}</h1>
                <h3 className="FlightInfo">Arrival:</h3>
                <h4 className="FlightTime">{dateArrival}</h4>
                <h4 className="FlightTime">{timeArrival}</h4>
            </div>
            <div>
                <h3 className="FlightInfo">Duration:</h3>
                <h4 className="FlightTime">{fly_duration}</h4>
            </div>
            <div>
                <h3 className="FlightInfo">Distance:</h3>
                <h4 className="FlightTime">{result}km</h4>
            </div>
            <div className="FlightStopovers">{stopovers}</div>
        </div>
    );
};

export default flight;
