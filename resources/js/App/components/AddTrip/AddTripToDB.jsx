import React, {useState,useEffect} from 'react'; 
import { connect } from "react-redux";
import ButtonBlue from './../UI/Button/ButtonBlue';

export function AddTripToDB({totalDistance,airportFrom,airportTo}) {
  const [userId, setUserId] = useState(null);
  const sendUserTripsUrl = "/api/trips/";

  const makeUserId = () => {
    let token = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    $.ajax({
      url: "/indexAjax",
      type: "POST",
      data: { _token: token, message: "bravo" },
      dataType: "JSON",
      success: (response) => {
        setUserId(response.id),
        console.log('response id', response.id);
      },
      error: (response) => {
        console.log("error");
        console.log(response);
      }
    });
  };
  useEffect(() => {
    makeUserId();
  }, []);

  const sendUserTripsToDB = async () => {
    console.log('adding trip working');
    const response = await fetch(`${sendUserTripsUrl}${userId}/${airportFrom}/${airportTo}/${totalDistance}`)
    await response.json();
    console.log("send user info", response);
  }



  return (
    <ButtonBlue clicked={sendUserTripsToDB}>Add trip to profile without offset</ButtonBlue>
  )

}


const mapStateToProps = (state) => {
  return {
    totalDistance: state.distance,
    airportFrom: state.airportFrom,
    airportTo: state.airportTo,
  };
};

export default connect(mapStateToProps)(AddTripToDB);

