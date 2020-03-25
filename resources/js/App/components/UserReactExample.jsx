import React, {useEffect, useState} from "react";
import UserProfile from './UserProfile/UserProfile';

export default function UserReactExample() {
    const [user, setUser] = useState("");
    const [userID, setUserID] = useState(0);

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
            setUserID(response.id);
        },
        error: response => {
            console.log("error");
            console.log(response);
        }
    });

    }

    useEffect(()=> {
        makeUser();
    },[])

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
                <UserProfile userID={userID}/>
            </div>
        );
    
}
