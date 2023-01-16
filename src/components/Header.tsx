import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Tween, Timeline } from "react-gsap";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function Header() {
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "#131313", boxShadow: '4px 1px 4px #999' }}>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box
            component='img'
            src="./images/logo.png"
            sx={{
              width: { xs: '35%', sm: '30%', md: '25%', lg: '20%'},
              my: 2
            }}
          />
          <Box
            display='flex'
          >
            <Button
              sx={{ 
                fontFamily: 'Montserrat-Bold',
                color: '#eee',
                mr: 3,
                backgroundColor: '#333',
                fontSize: { xs: '10px', lg: '15px', xl: '20px' },
                px: 4,
                borderRadius: '10px',
                border: '1px solid #777',
                textTransform: 'none'
              }}
            >
              Login
            </Button>
            <Button
              sx={{ 
                fontFamily: 'Montserrat-Bold',
                color: '#eee',
                mr: 3,
                backgroundColor: '#333',
                fontSize: { xs: '10px', lg: '15px', xl: '20px' },
                px: 3,
                borderRadius: '10px',
                border: '1px solid #777',
                textTransform: 'none'
              }}
            >
              Sign-up
            </Button>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
