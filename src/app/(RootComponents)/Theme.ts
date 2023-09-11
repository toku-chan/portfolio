'use client';

import { createTheme } from '@mui/material';
import { SpaceSize } from '~/designSystem/config';

export const theme = createTheme({
  typography: {
    fontSize: SpaceSize.base,
  },
});
