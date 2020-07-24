import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import MainApp from "./App";

test('render without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MainApp />, div)
  ReactDOM.unmountComponentAtNode(div)
});
