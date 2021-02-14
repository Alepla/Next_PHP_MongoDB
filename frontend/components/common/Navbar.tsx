import React from "react";
import styled from "@emotion/styled";
import useSWR from "swr";
import NavLink from "./NavLink";

import checkLogin from "../../lib/utils/checkLogin";
import storage from "../../lib/utils/storage";

const NavbarContainer = styled("nav")`
  position: relative;
  padding: 0.5rem 1rem;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

const NavbarPresenter = styled("div")`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const NavbarList = styled("ul")`
  float: right !important;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
`;

const NavbarItem = styled("li")`
  float: left;

  & + & {
    margin-left: 1rem;
  }
`;

const Navbar = () => {
  const { data: currentUser } = useSWR("user", storage);
  const isLoggedIn = checkLogin(currentUser);

    return(
        <NavbarContainer>
            <NavbarPresenter>
              <NavbarList>
                <NavbarItem>
                  <NavLink href="/user/login" as="/user/login">
                    Sign in
                  </NavLink>
                </NavbarItem>
              </NavbarList>
            </NavbarPresenter>
        </NavbarContainer>
    );
};

export default Navbar;