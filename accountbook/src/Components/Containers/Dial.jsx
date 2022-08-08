import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useDispatch } from 'react-redux';
import { change } from '../../Redux/titleSlice';

const actions = [
  { icon: <AddIcon />, name: 'Add' },
  { icon: <CalendarMonthIcon />, name: 'Calendar' },
];

export default function Dial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAdd = () => {
    setOpen(false);
    dispatch(change('ADD'))
  }

  const dispatch = useDispatch();

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        >
          <SpeedDialAction 
            key={actions[0].name}
            icon={actions[0].icon}
            tooltipTitle={actions[0].name}
            onClick={handleAdd}
          />
          <SpeedDialAction 
            key={actions[1].name}
            icon={actions[1].icon}
            tooltipTitle={actions[1].name}
            onClick={handleClose}
          />
      </SpeedDial>
    </Box>
  );
}