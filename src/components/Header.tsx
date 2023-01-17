import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

const navItems = ['Login', 'Sign-up'];

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#131313', height: '100vh' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText
                sx={{
                  fontFamily: 'Montserrat-Bold',
                  color: '#eee',
                  mr: { xs: 1, md: 3 },
                  backgroundColor: '#333',
                  fontSize: { xs: '10px', lg: '15px', xl: '20px' },
                  px: { xs: 2, md: 4 },
                  borderRadius: '10px',
                  border: '1px solid #777',
                  textTransform: 'none'
                }}
                primary={item}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="div" position='relative' sx={{
        backgroundColor: '#131313'
      }}>
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            display='flex'
            justifyContent='center'
          >
            <Box
              component='img'
              src="./images/logo.png"
              sx={{
                width: { xs: '45%', sm: '35%', md: '55%', lg: '60%', xl: '80%' },
                my: 2,
                backgroundColor: '#333',
                borderRadius: '10px',
                py: 1,
                px: 3,
                boxShadow: '4px 2px 4px #b190ff',
                border: '2px solid #b190ff',
              }}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} position='absolute' right='0'>
            {navItems.map((item, index) => (
              <Button
                key={index}
                sx={{
                  fontFamily: 'Montserrat-Bold',
                  color: '#eee',
                  mr: { xs: 1, md: 3 },
                  backgroundColor: '#333',
                  fontSize: { xs: '10px', lg: '15px', xl: '20px' },
                  px: { xs: 2, md: 4 },
                  borderRadius: '10px',
                  border: '1px solid #777',
                  textTransform: 'none'
                }}
              >{item}</Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}