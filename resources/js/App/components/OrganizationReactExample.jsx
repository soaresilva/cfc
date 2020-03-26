import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
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

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Data from
                                <strong>Laravel to React component</strong> with
                                Ajax
                            </div>
                            <div className="card-body">
                                Currently logged user: {user.name} #{user.id}
                            </div>
                        </div>
                    </div>
                </div>
                {!user ? <p>Loading...</p> : <OrganizationProfile org_id={user.id} />}
            </div>
        );
}
