import React, { useState, useEffect } from "react";
import AddEventSnackbar from "../UI/Snackbar/AddEventSnackbar";

import "../../../../sass/_org-profile.scss"


export default function OrganizationAddEvent({ org_id, getEvents }) {
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [addEventName, setAddEventName] = useState("");
  const [addEventDescription, setAddEventDescription] = useState("");
  const [addEventDate, setAddEventDate] = useState("");

  const [openSnackbarAdd, setOpenSnackbarAdd] = useState(false);


  const addEventUrl = "/api/org/event/add/";

  const addEvent = (e) => {
    e.preventDefault();
    fetch(`${addEventUrl}${org_id}`, {
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
          'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },
      body: JSON.stringify({
        'name': addEventName,
        'description': addEventDescription,
        'date': addEventDate,
      }) 
    })
    setShowAddEventForm(!showAddEventForm);
    setAddEventName("");
    setAddEventDescription("");
    setAddEventDate("");
  };

  useEffect(() => {
    getEvents();
  },[showAddEventForm])

  const handleShowAddEventForm = () => {
    setShowAddEventForm(!showAddEventForm);
  };

  const handleAddEventName = (e) => {
    setAddEventName(e.target.value);
  };

  const handleAddEventDescription = (e) => {
    setAddEventDescription(e.target.value);
  };

  const handleAddEventDate = (e) => {
    setAddEventDate(e.target.value);
  };


  const handleOpenSnackbarAdd = () => {
    getEvents();
    setOpenSnackbarAdd(true);
  };

  const handleCloseSnackbarAdd = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbarAdd(false);
  };



  return (
    <div>
      <button className="AddEventSubmit" onClick={handleShowAddEventForm}>Add Event</button>
      <br />
      <br />
      {showAddEventForm ? (
        <form method="" action="" onSubmit={addEvent}>
          <input className="AddEventInput" onChange={handleAddEventName} value={addEventName} type="text" name="name" placeholder="event name" />
          <br />
          <br />
          <input className="AddEventInput" onChange={handleAddEventDescription} value={addEventDescription} type="text" name="description" placeholder="event description" />
          <br />         
          <br />
          <input className="AddEventInput" onChange={handleAddEventDate} value={addEventDate} type="date" name="date" placeholder="event date" />
          <br />
          <br />
          <input className="AddEventSubmit" type="submit" value="Submit Event" onClick={handleOpenSnackbarAdd}/>
        </form>
      ) : (
        ""
      )}
      <AddEventSnackbar opened={openSnackbarAdd} clicked={handleCloseSnackbarAdd} />

    </div>
  );
}
