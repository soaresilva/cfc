import React, { useLayoutEffect, useState, useEffect, Fragment } from "react";
import UserProfile from "./UserProfile";
import "../../../../sass/app.scss";
import Spinner from "./../UI/Spinner/Spinner";

export default function UserApp() {
  const [user, setUser] = useState("");

  const makeUser = () => {
    let token = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    $.ajax({
      url: "/indexAjax",
      type: "POST",
      data: { _token: token, message: "bravo" },
      dataType: "JSON",
      success: (response) => {
        setUser(response);
      },
      error: (response) => {
        console.log("error");
      }
    });
  };

  useLayoutEffect(() => {
    makeUser();
  }, []);

  return (
    <div>
      {!user ? (
        <div style={{ textAlign: "center" }}>
          <Spinner />
        </div>
      ) : (
        <UserProfile user_id={user.id} />
      )}
    </div>
  );
}
