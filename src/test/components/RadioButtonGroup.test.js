import React from 'react';
import { shallow } from 'enzyme';
import RadioButtonGroup from '../../components/RadioButtonGroup';

const baseProps = {
	// whatever fake props you want passed to the component
	name: 'gender',
	errors: {'gender': ''},
	value: '',
	changeData: jest.fn()
};
const radioButtonGroup = shallow(<RadioButtonGroup {...baseProps} />);

it('should render correctly', () => {
	expect(radioButtonGroup).toMatchSnapshot();
});