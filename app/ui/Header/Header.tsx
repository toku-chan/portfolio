/**
 * Header
 * * 共通Titleを持つ
 * * 共通Navigationを持つ
 */
'use client';

import React from 'react';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {
  return (
    <>
      <Navigation />
    </>
  );
};
