import React from 'react';
import {storiesOf} from '@storybook/react';

import Decorator from '../../lib/decorator';
import Result from '.';

storiesOf('Result', module)
  .addDecorator(Decorator)
  .add('when rendered', () => <Result transcript="Nothing" />)