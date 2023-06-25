'use client';

import { Global } from '@emotion/react';
import { css } from '@emotion/react';

const ResetStyles = css`
  html,
  body {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    ul li {
      list-style: none;
    }
  }
`;

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: LayoutProps) {
  return (
    <html lang='ja'>
      <Global styles={ResetStyles} />
      <body>{children}</body>
    </html>
  );
}
