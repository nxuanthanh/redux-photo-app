import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { FormGroup, Label } from "reactstrap";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  options: [],
};

function SelectField(props) {
  const { field, options, label, placeholder, disabled } = props;
  const { name, value } = field;
  const selectedOption = options.find((option) => option.value === value);

  const handleSelectedOptionsChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name,
        value: selectedValue,
      },
    };

    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionsChange}
        placeholder={placeholder}
        isDisabled={disabled}
        options={options}
      />
    </FormGroup>
  );
}

export default SelectField;
