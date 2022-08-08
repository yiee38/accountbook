import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BackButton from '../Snippets/BackButton';
import { useSelector } from 'react-redux';
import {titleValue} from '../../Redux/titleSlice';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function TopBar() {
  const title = useSelector(titleValue);
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid 
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center">
        <Grid item xs={4}>
          {title==='HOME' ? <Box component='div'/>:<BackButton />}
        </Grid>
        <Grid 
          item 
          xs={4} 
          textAlign="center">
          <Typography> {title} </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box component='div'></Box>
        </Grid>
        </Grid>
      </Toolbar>  
    </AppBar>
  )
}