import React from "react";

import "./FlightSection.css";
import Flight from "./../../components/Flight/Flight";
import Spinner from "../../components/UI/Spinner/Spinner";
import searchFlights from "../../functions/searchFlights";

class FlightSection extends React.Component {
    state = {
        data: [],
        loading: false,
        origin: "",
        destination: ""
    };

    componentDidUpdate(prevProps, snapshot) {
        if (prevProps.submitted !== this.props.submitted) {
            if (prevProps.direct !== this.props.direct) {
                this.getFlightsHandler();
                this.setState({ loading: true });
                return this.props.submitted;
            }
            this.getFlightsHandler();
            this.setState({ loading: true });
            return this.props.submitted;
        }
    }

    getFlightsHandler = async () => {
        const data = await searchFlights(
            this.props.origin,
            this.props.destination,
            this.props.direct
        );
        console.log(data);
        this.setState(prevState => {
            return {
                ...prevState,
                data,
                loading: false
            };
        });
    };

    render() {
        // Flight is a Spinner while loading and then it renders as flights
        let flight = null;
        let content = <h1>Voyage, voyage</h1>;

        if (!this.state.origin) {
            content = null;
        }

        if (this.state.loading) {
            flight = <Spinner />;
            content = null;
        } else if (this.state.data.length === 0) {
            flight = (
                <h3 className="Warning">
                    <i class="fas fa-plane-slash"></i> Warning: Flights might be
                    cancelled due to COVID-19
                </h3>
            );
        } else {
            content = null;
            flight = this.state.data.map(flight => {
                return <Flight key={flight.id} {...flight} />;
            });
        }

        return (
            <div className="FlightSection">
                {flight}
                {content}
            </div>
        );
    }
}

export default FlightSection;
