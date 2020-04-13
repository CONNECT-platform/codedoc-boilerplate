import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = configuration({
  dest: {
    namespace: '/codedoc-boilerplate'
  },
  theme,
  page: {
    title: {
      base: 'Codedoc Boilerplate'
    }
  },
  misc: {
    github: {
      user: 'CONNECT-platform',
      repo: 'codedoc-boilerplate',
    }
  }
});
