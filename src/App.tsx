import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Typography from '@mui/material/Typography';
import { DataProvider } from './contexts';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Typography variant="body2" color="text.secondary" align="center">
          <Layout />
        </Typography>
      </div>
    </DataProvider>
  );
}

export default App;
