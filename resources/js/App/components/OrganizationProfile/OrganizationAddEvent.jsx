import React, { useState } from "react";

export default function OrganizationAddEvent({ org_id }) {
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [addEventName, setAddEventName] = useState("");
  const [addEventDescription, setAddEventDescription] = useState("");
  const [addEventDate, setAddEventDate] = useState("");


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

  };

  const handleShowAddEventForm = () => {
    setShowAddEventForm(!showAddEventForm);
  };

  const handleAddEventName = (e) => {
    console.log(addEventName);
    setAddEventName(e.target.value);
  };

  const handleAddEventDescription = (e) => {
    setAddEventDescription(e.target.value);
  };

  const handleAddEventDate = (e) => {
    setAddEventDate(e.target.value);
  };



  return (
    <div>
      <button onClick={handleShowAddEventForm}>Add Event</button>
      {showAddEventForm ? (
        <form method="" action="" onSubmit={addEvent}>
          <input onChange={handleAddEventName} value={addEventName} type="text" name="name" placeholder="event name" />
          <br />
          <input onChange={handleAddEventDescription} value={addEventDescription} type="text" name="description" placeholder="event description" />
          <br />
          <input onChange={handleAddEventDate} value={addEventDate} type="date" name="date" placeholder="event date" />
          <br />
          <input  type="submit" value="submit event" />
        </form>
      ) : (
        ""
      )}
    </div>
  );
}
