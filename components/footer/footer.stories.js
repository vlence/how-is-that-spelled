import React from 'react';
import {storiesOf} from '@storybook/react';

import Decorator from '../../lib/decorator';
import Footer from '.';

storiesOf('Footer', module)
  .addDecorator(Decorator)
  .add('when rendered', () => <Footer />)