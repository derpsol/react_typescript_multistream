import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Tween, Timeline } from "react-gsap";

export default function Header() {
  return (
    <React.Fragment>
      <Container maxWidth="xl" sx={{ pt: 4, pb: 4, color: "#131313" }}>
        <Box>
          <Box
            component='img'
            src="./images/logo.png"
          />
        </Box>
      </Container>
    </React.Fragment>
  );
}
