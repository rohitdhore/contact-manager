import React from 'react';
import { shallow } from 'enzyme';
import InfoText from '../../components/InfoText';

const baseProps = {
	// whatever fake props you want passed to the component
	value: 'test',
	type: ''
};

const errorText = shallow(<InfoText {...baseProps} />);

it('renders correctly', () => {
	expect(errorText).toMatchSnapshot();
});
