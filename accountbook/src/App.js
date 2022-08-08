import AddPage from './Components/Containers/AddPage';
import Box from '@mui/material/Box';
import store  from './store'
import { Provider } from 'react-redux'
import React from 'react';
import Dial from './Components/Containers/Dial';
import TopBar from './Components/Containers/TopBar';

function App() {
  return (
    <Provider store={store}>
    <React.Fragment>
      <TopBar />
      <Box 
          display="flex" 
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
        <AddPage />
      </Box>
      <Dial />
    </React.Fragment>
    </Provider>
  );
}

export default App;
