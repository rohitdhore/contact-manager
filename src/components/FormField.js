import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import ErrorText from "./ErrorText";

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
			<ErrorText value={errors[name]} />}
		</TextWrapper>
	);
};

export default FormField;