'use client';

import { createContext, useContext } from 'react';

export const DeviceContext = createContext({ deviceType: 'pc' });
export const useDeviceContext = () => useContext(DeviceContext);
