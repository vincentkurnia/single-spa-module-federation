import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';
import Link from '@mui/material/Link';

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
          <Typography variant="h6" component={Link} href="/" sx={styles.link}>
            Home
          </Typography>
          <Typography variant="h6" component={Link} href="/demo" sx={styles.link}>
            Demo
          </Typography>
          <Typography variant="h6" component={Link} href="/demo/1" sx={styles.link}>
            Demo One
          </Typography>
          <Typography variant="h6" component={Link} href="/demo/2" sx={styles.link}>
            Demo Two
          </Typography>
          <Typography variant="h6" component={Link} href="/another" sx={styles.link}>
            Another
          </Typography>
          <Typography variant="h6" component={Link} href="/another/1" sx={styles.link}>
            Another One
          </Typography>
          <Typography variant="h6" component={Link} href="/another/2" sx={styles.link}>
            Another Two
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}