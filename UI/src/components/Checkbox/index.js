import React, { Component } from "react";
import PropTypes from "prop-types";

class Checkbox extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
  };

  state = {
    isChecked: false,
  };

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked,
    }));

    handleCheckboxChange(label);
  };

  render() {
    const { label, classes, color } = this.props;
    const { isChecked } = this.state;

    return (
      <div className={classes}>
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />

          <span
            className="checkmark"
            style={{
              backgroundColor: color,
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            {isChecked && (
              <img
                src={require("../../static/check.svg")}
                alt="check-solid-icon"
                width="15px"
              />
            )}
          </span>
        </label>
      </div>
    );
  }
}

export default Checkbox;
