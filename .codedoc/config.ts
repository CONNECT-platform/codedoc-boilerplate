import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = configuration({
  theme,
  dest: {
    namespace: '/codedoc-boilerplate'
  },
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
