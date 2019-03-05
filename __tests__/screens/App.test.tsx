import * as React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { App } from '../../App';

describe('Test Screen: App', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });
});
