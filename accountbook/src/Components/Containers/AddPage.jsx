import React, {useState} from "react";
import DatePicker from '../Snippets/DatePicker';
import Box from '@mui/material/Box';
import IconSelector from "../Snippets/IconSelector";
import TextField from '@mui/material/TextField';
import FormattedInputs from "../Snippets/NumberTextField";
import CurrencySelection from "../Snippets/CurrencySelection";

export default function AddPage(props) {
    const [date, setDate] = useState(new Date());
    const [selection, setSelection] = useState(0);
    const [money, setMoney] = useState('0');
    const [title, setTitle] = useState('');
    const [currency, setCurrency] = useState(0)

    const marks = [
        {
          value: 0,
          label: 'CNY ¥',
        },
        {
          value: 1,
          label: 'USD $',
        },
        {
          value: 2,
          label: 'MEX $',
        },
    ]

    const handleCurrencySet = (event) => {
        setCurrency(1);
        console.log(event)
    }

    const handleMoneyChange = (event) => {
        setMoney(event.target.value);
    }

	const handleClick = (event, newSelection) => {
		if (newSelection != null){
    	    setSelection(newSelection);
		}
    };

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleNewDate = (newValue) => {
        setDate(newValue);
        console.log(dateConverter(newValue));
    };

    const dateConverter = (date) => {
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
    }

    return (
        <Box sx={{width: "85%"}}>
            <DatePicker date={date} setDate = {handleNewDate}/>
            <IconSelector selection={selection} handleClick={handleClick} sx={{mt: 1}}/>
            <FormattedInputs money={money} handleChange={handleMoneyChange} sx={{mt: 2}}/>
            <TextField fullWidth label="Title" value={title} onChange={handleTitle} sx={{mt: 1}}/>
            <CurrencySelection 
                currencies={marks} 
                selection={currency} 
                onChange={handleCurrencySet} 
                sx={{mt:1, justifyContent: 'center', width: '100%'}}
            />
        </Box>
    )
}