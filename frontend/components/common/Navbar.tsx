import React from "react";
import styled from "@emotion/styled";
import useSWR, { mutate, trigger } from "swr";
import NavLink from "./NavLink";

import checkLogin from "../../lib/utils/checkLogin";
import storage from "../../lib/utils/storage";
import Router from "next/router";

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

const Logo = styled("a")`
  float: left;
  font-family: titillium web, sans-serif !important;
  font-size: 1.5rem !important;
  margin-right: 2rem !important;
  padding-top: 0 !important;
  padding-bottom: 0.25rem;
  color: #grey !important;
`;

const Navbar = () => {
  const { data: currentUser } = useSWR("user", storage);
  const isLoggedIn = checkLogin(currentUser);
  
  const handleLogout = async (e) => {
    e.preventDefault();
    window.localStorage.removeItem("user");
    mutate("user", null);
    Router.push(`/`).then(() => trigger("user"));
  }

  return(
    <NavbarContainer>
      <NavbarPresenter>
        <Logo href="/">
          MyNextApp
        </Logo>
        <NavbarList>
          {
            !isLoggedIn?
              <NavbarItem>
                <NavLink href="/user/login" as="/user/login">
                  Sign in
                </NavLink>
              </NavbarItem>
            :
            <div>
              <NavbarItem>
              <NavLink href="/profile" as="/profile">
                {currentUser?.username}
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              <button onClick={handleLogout}>
                Log out
              </button>
            </NavbarItem>
            </div>
          }
        </NavbarList>
      </NavbarPresenter>
    </NavbarContainer>
  );
};

export default Navbar;