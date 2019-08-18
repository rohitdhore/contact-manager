import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from '../../components/ContactForm';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});

const contactForm = shallow(<Provider store={store}><ContactForm/></Provider>);

it('should render correctly', () => {
	expect(contactForm).toMatchSnapshot();
});