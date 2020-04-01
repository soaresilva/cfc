import React, { useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

import { selectQuantity } from "../../../store/actions/index";
import "./Select.css";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 60,
    height: 50
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export function SelectQuantity({ onSelectQuantity }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    onSelectQuantity(value);
  }, [value]);

  return (
    <div className="SelectWrapper">
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Tickets*
        </InputLabel>
        <NativeSelect
          value={value}
          onChange={handleChange}
          inputProps={{
            name: "age",
            id: "age-native-label-placeholder"
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </NativeSelect>
        {/* <FormHelperText>Label + placeholder</FormHelperText> */}
      </FormControl>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectQuantity: (value) => dispatch(selectQuantity(value))
  };
};

export default connect(null, mapDispatchToProps)(SelectQuantity);
