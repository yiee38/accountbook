import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function CurrencySelection(props) {
  return (
    <Stack direction="row" spacing={1} sx={{...props.sx}}>
        {props.currencies.map((currency, index) => (
            <Chip key={index} label={currency.label} />
        ))}
    </Stack>
  );
}