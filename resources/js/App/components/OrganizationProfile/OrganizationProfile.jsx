import React, { useEffect, useState } from "react";
//import "./App.css";
import OrganizationEventHistory from "./OrganizationEventHistory";

const Spinner = () => {
    return <h1>spinner</h1>;
};

export default function OrganizationProfile({ org_id }) {

    const getEventsUrl= "/api/events/";

    const [orgEvents, setOrgEvents] = useState([]);

    const getEvents = async () => {
        try {
            const response = await fetch(`${getEventsUrl}${org_id}`);
            console.log('data fetch', response);
            const data = await response.json();
            console.log("data", data);
            setOrgEvents(data);
        } catch (err) {
            console.log("getEvents error", err);
        }
    };
    useEffect(() => {
        getEvents();
    }, []);

    return (
        <div>
            {!orgEvents ? (
                <Spinner />
            ) : (
                <OrganizationEventHistory
                setOrgEvents={setOrgEvents}
                orgEvents={orgEvents}
                />
            )}
            <p>HElllllooo!!</p>

        </div>
    );
}
