import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled("footer")``;

const FooterDiv = styled("div")`
    background-color: black;
    position:fixed;
    bottom: 0;
    width: 100%;
    height: 40px;
    color: white;
`;

const Footer = () => (
    <FooterContainer>
        <FooterDiv>

        </FooterDiv>
    </FooterContainer>
);

export default Footer;