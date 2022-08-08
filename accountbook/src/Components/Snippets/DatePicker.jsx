import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set, dateValue } from '../../Redux/dateSlice';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { handleNewDate } from '../../utils/dates';

export default function MaterialUIPickers(props) {
    const date = useSelector(dateValue);
    const dispatch = useDispatch();

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
            label="Date picker"
            inputFormat="MM/dd/yyyy"
            value={date}
            onChange={e => dispatch(set(handleNewDate(e)))}
            renderInput={(params) => <TextField {...params} fullWidth />}
            
            />
        </LocalizationProvider>
    )
}