import React from 'react';
import { shallow } from 'enzyme';
import ErrorText from '../../components/ErrorText';

const baseProps = {
	// whatever fake props you want passed to the component
	value: 'test',
};

const errorText = shallow(<ErrorText {...baseProps} />);

it('renders correctly', () => {
	expect(errorText).toMatchSnapshot();
});
