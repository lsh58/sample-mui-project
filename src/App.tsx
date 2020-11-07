import React from 'react';
import { CssBaseline, Container, Box } from '@material-ui/core';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box
          component="div"
          style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
        />
      </Container>
    </React.Fragment>
  );
}

export default App;
