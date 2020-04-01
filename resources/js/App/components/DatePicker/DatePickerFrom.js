import React from "react";
import { connect } from "react-redux";

import DayPickerInput from "react-day-picker/DayPickerInput";
import { selectDateFrom } from "../../store/actions/index";
import "react-day-picker/lib/style.css";
import "./DatePicker.css";
// import "../../../../../node_modules/react-day-picker/lib/style.css";

export class DatePickerFrom extends React.Component {
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
      <div style={{ color: "black" }} className="DayPickerInput">
        <DayPickerInput
          inputProps={{
            style: {
              height: 55,
              textAlign: "center",
              borderRadius: "7px",
              backgroundColor: "rgb(255, 244, 229)",
              border: "none",
              outline: "none"
            }
          }}
          dayPickerProps={{
            month: new Date(2020, 3),
            showWeekNumbers: true,
            todayButton: "Today"
          }}
          onDayChange={this.handleDayChange}
          placeholder="Date From*:"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectDate: (dateFrom) => dispatch(selectDateFrom(dateFrom))
  };
};

export default connect(null, mapDispatchToProps)(DatePickerFrom);
