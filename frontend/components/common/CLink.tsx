import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

interface CustomLinkProps {
  href: string;
  as: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const ContentButton = styled("button")`
  cursor: pointer;
  border: none;
`;

const CLink = ({
  className,
  href,
  as,
  onClick,
  children,
}: CustomLinkProps) => (
  <Link href={href} as={as} passHref onClick={onClick}>
    <ContentButton className={className || ""}>{children}</ContentButton>
  </Link>
);

export default CLink;
