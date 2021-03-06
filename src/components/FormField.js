import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import InfoText from "./InfoText";
import PropTypes from "prop-types";

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const FormField = (props) => {
	const {id, label, name, value, errors} = props;
	return (
		<TextWrapper>
			<TextField
				id={id}
				label={label}
				name={name}
				value={value}
				margin="normal"
				autoComplete={'none'}
				onChange={props.changeData(name)}
				required={true}
			/>
			{errors[name].length > 0 &&
			<InfoText value={errors[name]} type={'error'} />}
		</TextWrapper>
	);
};

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	changeData: PropTypes.func.isRequired
};

export default FormField;