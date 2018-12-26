import React from 'react';
import {storiesOf} from '@storybook/react';

import Decorator from '../../lib/decorator';
import Description from '.';

storiesOf('Description', module)
  .addDecorator(Decorator)
  .add('when rendered', () => <Description />)