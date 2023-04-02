import React from "react";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode
}

const H2 = styled.h1`
  font-size: 21px;
  font-weight: 700;
  color: rgba(0, 0 , 0, 1);
`;

export function Heading_2({
  children
}: Props) {
  return (
    <H2>
      {children}
    </H2>
  )
}

const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: rgba(0, 0 , 0, 1);
`;

export function Heading_1({
  children
}: Props) {
  return (
    <H1>
      {children}
    </H1>
  )
}