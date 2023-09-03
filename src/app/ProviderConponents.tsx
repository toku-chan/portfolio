'use client';

import React from 'react';
import { DeviceContext } from '~/contexts/device';

type Props = {
  children: React.ReactNode;
  deviceType: string;
};

export const ProviderComponents: React.FC<Props> = props => {
  return (
    <DeviceContext.Provider value={{ deviceType: props.deviceType }}>
      {props.children}
    </DeviceContext.Provider>
  );
};
