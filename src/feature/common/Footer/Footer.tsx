/**
 * NOTE
 * * layout.tsxに直接読み込ませたい
 * * ただlayout.tsはサーバーサイドとして扱い、共通metadataを持ちたい
 * * なので、src/featureに"use client"を記載する
 *
 * HACK
 * * layoutで持ちたいuiはappに記載するべきか、src/featureとして持つべきか検討する
 */
'use client';

import React from 'react';
import styled from '@emotion/styled';

const CopyRight = styled.span`
  font-size: 8px;
`;

export const Footer: React.FC = () => {
  return (
    <footer>
      <CopyRight>©︎ i.nakajima</CopyRight>
    </footer>
  );
};
