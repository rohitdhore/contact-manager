import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

//it('renders without crashing', () => {
//  const div = document.createElement('div');
//  ReactDOM.render(<App />, div);
//  ReactDOM.unmountComponentAtNode(div);
//});
