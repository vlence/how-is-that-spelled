import React from 'react';
import typography from './typography';

/**
 * Decorator for stories. Applies typography styles.
 */
const Decorator = Component => {
  typography.injectStyles();
  return <Component />;
};

export default Decorator;