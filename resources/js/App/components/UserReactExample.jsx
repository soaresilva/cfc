import React, { useLayoutEffect, useState, Fragment } from "react";
import UserProfile from "./UserProfile/UserProfile";

export default function UserReactExample() {
    const [user, setUser] = useState("");

    const makeUser = () => {
        let token = document
            .querySelector("meta[name='csrf-token']")
            .getAttribute("content");
        $.ajax({
            url: "/indexAjax",
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
    };

    useLayoutEffect(() => {
        makeUser();
    }, []);
    console.log("react user example user id", user.id);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            {/* Data from{" "} */}
                            <strong>Laravel to React component</strong> with
                            Ajax
                        </div>
                        <div className="card-body">
                            Currently logged user: {user.first_name}{" "}
                            {user.surname} #{user.id}
                        </div>
                    </div>
                </div>
            </div>
            {!user ? <p>Loading...</p> : <UserProfile user_id={user.id} />}
        </div>
    );
}
