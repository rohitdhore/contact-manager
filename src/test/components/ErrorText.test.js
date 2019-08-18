import React from 'react';
import { shallow } from 'enzyme';
import ErrorText from '../../components/ErrorText';

const errorText = shallow(<ErrorText />);

it('renders correctly', () => {
	expect(errorText).toMatchSnapshot();
});
