import React from "react";
import styled from "@emotion/styled";

const NavbarContainer = styled("nav")`
  position: relative;
  padding: 0.5rem 1rem;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Navbar = () => {
    return(
        <NavbarContainer>
            
        </NavbarContainer>
    );
};

export default Navbar;