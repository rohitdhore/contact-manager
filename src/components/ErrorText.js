import React from "react";
import styled from 'styled-components';

const StyledSpan = styled.span`
	font-size: 14px;
	color: #f50057;
`;

const ErrorText = (props) => {
	return (<StyledSpan>{props.value}</StyledSpan>)
};

export default ErrorText;