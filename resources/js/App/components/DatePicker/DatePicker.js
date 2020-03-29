import React from "react";
import { connect } from "react-redux";

import DayPickerInput from "react-day-picker/DayPickerInput";
import { selectDate } from "../../store/actions/index";
import "react-day-picker/lib/style.css";
// import "../../../../../node_modules/react-day-picker/lib/style.css";

export class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined
    };
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day }, () => this.props.onSelectDate(this.state.selectedDay.toLocaleDateString("en-GB")));
  }

  render() {
    return (
      <div style={{ color: "black" }}>
        <DayPickerInput
          inputProps={{
            style: {
              width: "7.5vw",
              height: 55,
              textAlign: "center",
              borderRadius: "7px",
              backgroundColor: "rgb(255, 244, 229)",
              border: "none",
              outline: "none"
            }
          }}
          dayPickerProps={{
            month: new Date(2020, 2),
            showWeekNumbers: true,
            todayButton: "Today"
          }}
          onDayChange={this.handleDayChange}
          placeholder="Departure*:"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectDate: (date) => dispatch(selectDate(date))
  };
};

export default connect(null, mapDispatchToProps)(DatePicker);
