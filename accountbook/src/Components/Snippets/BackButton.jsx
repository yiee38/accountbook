import * as React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { change } from '../../Redux/titleSlice';

export default function BackButton () {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(change('HOME'))
    console.log('clicked')
  }
  return (
    <IconButton aria-label='back' onClick={handleClick} color="inherit" edge="start" >
      <ArrowBackIosNewIcon />
    </IconButton>
  )
}