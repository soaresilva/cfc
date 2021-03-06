import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../../../../sass/app.scss";
import OrganizationProfile from "./OrganizationProfile";

export default function OrganizationApp() {
  const [user, setUser] = useState("");

  const makeOrgUser = () => {
    let token = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    $.ajax({
      url: "/orgIndexAjax",
      type: "POST",
      data: { _token: token, message: "bravo" },
      dataType: "JSON",
      success: (response) => {
        ("success");
        setUser(response);
      },
      error: (response) => {
        console.log("error");
      }
    });
  };

  useEffect(() => {
    makeOrgUser();
  }, []);

  return (
    <>
      {!user ? (
        <p>Loading...</p>
      ) : (
        // <div className="container">
        <div className="org-app">
          <OrganizationProfile org_id={user.id} />
        </div>
      )}
    </>
  );
}
