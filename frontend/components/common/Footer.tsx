import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled("footer")``;

const FooterDiv = styled("div")`
    height:10%;
    background:black;
    color:white;
    text-align:center;
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
`;

const Footer = () => (
    <FooterContainer>
        <FooterDiv>

        </FooterDiv>
    </FooterContainer>
);

export default Footer;