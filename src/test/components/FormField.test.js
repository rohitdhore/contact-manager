import React from 'react';
import { shallow } from 'enzyme';
import FormField from '../../components/FormField';

const baseProps = {
	// whatever fake props you want passed to the component
	name: 'name',
	errors: {'name': ''},
	changeData: () => {}
};
const radioButtonGroup = shallow(<FormField {...baseProps} />);

it('should render correctly', () => {
	expect(radioButtonGroup).toMatchSnapshot();
});