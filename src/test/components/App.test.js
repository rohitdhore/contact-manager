import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});

const app = shallow(<Provider store={store}><App /></Provider>);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});
