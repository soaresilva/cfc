import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import '../../../sass/app.scss';

import OrganizationProfile from "./OrganizationProfile/OrganizationProfile";

export default function OrganizationReactExample () {
    const [user, setUser] = useState("");
 

    const makeOrgUser = () => {
        let token = document
            .querySelector("meta[name='csrf-token']")
            .getAttribute("content");

        $.ajax({
            url: "/orgIndexAjax",
            type: "POST",
            data: { _token: token, message: "bravo" },
            dataType: "JSON",
            success: response => {
                console.log("success");
                console.log(response);
                setUser(response);
            },
            error: response => {
                console.log("error");
                console.log(response);
            }
        });

    }

    useEffect(()=> {
        makeOrgUser();
    },[])

    // const getOrgTotals = async () => {
    // needs to grab all the events with this user id and then all the trips with that event id and map through them 
    // }

    

        return (
            <>
            {!user ? <p>Loading...</p> :
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            {/* <div className="card-header">
                                Data from
                                <strong>Laravel to React component</strong> with
                                Ajax
                            </div>
                            <div className="card-body">
                                Currently logged user: {user.name} #{user.id}
                            </div> */}
                            <div className="org-heading">
                               <h2>{user.name}'s Profile</h2>
                                {/*  <div className="org-summary">
                                    {/*need to get info for this!!
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <OrganizationProfile org_id={user.id} />
            </div>}
            </>
        );
}
