import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const styles = {
  link: {
    marginRight: 4,
    textDecoration: "none",
    color: "white",
    fontWeight: "bold"
  }
}

export default function Root() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="demo" sx={styles.link}>
            Demo
          </Typography>
          <Typography variant="h6" component={Link} to="demo/1" sx={styles.link}>
            Demo One
          </Typography>
          <Typography variant="h6" component={Link} to="demo/2" sx={styles.link}>
            Demo Two
          </Typography>
          <Typography variant="h6" component={Link} to="another" sx={styles.link}>
            Demo
          </Typography>
          <Typography variant="h6" component={Link} to="another/1" sx={styles.link}>
            Demo One
          </Typography>
          <Typography variant="h6" component={Link} to="another/2" sx={styles.link}>
            Demo Two
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}