import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from './ContactForm';

const contactForm = shallow(<ContactForm/>);

it('should render correctly', () => {
	expect(contactForm).toMatchSnapshot();
});