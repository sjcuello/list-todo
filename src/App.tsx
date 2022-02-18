import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      <Typography variant="body2" color="text.secondary" align="center">
        <Layout/>
      </Typography>
    </div>
  );
}

export default App;
