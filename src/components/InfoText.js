import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSpan = styled.span`
	font-size: 14px;
	${({type}) => type === 'error' ? `color: #f50057` : `color: #00a152`}}
`;

const InfoText = (props) => {
	return (<StyledSpan type={props.type}>{props.value}</StyledSpan>)
};

InfoText.propTypes = {
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

export default InfoText;