import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSpan = styled.span`
	font-size: 14px;
	color: #f50057;
`;

const ErrorText = (props) => {
	return (<StyledSpan>{props.value}</StyledSpan>)
};

ErrorText.propTypes = {
	value: PropTypes.string.isRequired,
};

export default ErrorText;