import { AppBar, Container, Toolbar, Typography } from "@mui/material"
import TaskAltIcon from '@mui/icons-material/TaskAlt';


const Header = () => {
    return(
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <TaskAltIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
            //   letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TODO APP
          </Typography>
                </Toolbar>
          </Container>
        </AppBar>
    )
}

export default Header