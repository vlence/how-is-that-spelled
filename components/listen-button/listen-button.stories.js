import React from 'react';
import {storiesOf} from '@storybook/react';

import Decorator from '../../lib/decorator';
import ListenButton from '.';

storiesOf('ListenButton', module)
  .addDecorator(Decorator)
  .add('when rendered', () => <ListenButton />)