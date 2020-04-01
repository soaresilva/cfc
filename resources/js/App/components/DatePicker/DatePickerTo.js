import React from "react";
import { connect } from "react-redux";

import DayPickerInput from "react-day-picker/DayPickerInput";
import { selectDateTo } from "../../store/actions/index";
import "react-day-picker/lib/style.css";
import "./DatePicker.css";

export class DatePickerTo extends React.Component {
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
          placeholder="Date To*:"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectDate: (dateTo) => dispatch(selectDateTo(dateTo))
  };
};

export default connect(null, mapDispatchToProps)(DatePickerTo);
