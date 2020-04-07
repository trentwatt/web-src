import React from 'react';

import Logo from './Logo';

export default {
  component: Logo,
  parameters: {
    backgrounds: [
      { default: true,  name: 'dark background', value: '#111' },
    ],
  },
  title: 'Logo',
};

export const Default = (): React.ReactNode => <Logo />;
