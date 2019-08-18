import React from 'react';
import { shallow } from 'enzyme/build';
import TableComp from '../../components/TableComp';

const baseProps = {
	// whatever fake props you want passed to the component
	tags: [],
	records: []
};
const tableComp = shallow(<TableComp />);

it('renders correctly', () => {
	expect(tableComp).toMatchSnapshot();
});
