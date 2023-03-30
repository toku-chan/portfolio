import React from "react";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode
}

const Heading_1_Styles = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: rgba(0, 0 , 0, 1);
`;

export function Heading1({
  children
}: Props) {
  return (
    <Heading_1_Styles>
      {children}
    </Heading_1_Styles>
  )
}