import React from 'react';
import { shallow } from 'enzyme/build';
import TableComp from '../../components/TableComp';

const tableComp = shallow(<TableComp />);

it('renders correctly', () => {
	expect(tableComp).toMatchSnapshot();
});
