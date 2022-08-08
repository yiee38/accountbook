import * as React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function FormattedInputs(props) {

  return (
    <Box
        sx={{...props.sx}}
    >
      <TextField
        fullWidth
        label="Cost"
        value={props.money}
        onChange={props.handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
    </Box>
  );
}
