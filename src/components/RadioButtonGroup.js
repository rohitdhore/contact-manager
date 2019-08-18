import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Radio from '@material-ui/core/Radio/index';
import RadioGroup from '@material-ui/core/RadioGroup/index';
import FormControlLabel from '@material-ui/core/FormControlLabel/index';
import FormControl from '@material-ui/core/FormControl/index';
import FormLabel from '@material-ui/core/FormLabel/index';
import ErrorText from './ErrorText';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	formControl: {
		marginTop: '30px',
	},
	group: {
		margin: theme.spacing(1, 0),
	},
}));

const RadioButtonsGroup = (props) => {
	const classes = useStyles();
	const {name, errors, value} = props;
	return (
		<div className={classes.root}>
			<FormControl component="fieldset" className={classes.formControl}>
				<FormLabel component="legend">Gender *</FormLabel>
				<RadioGroup
					aria-label="gender"
					name="gender"
					className={classes.group}
					value={value}
					onChange={props.changeData(name)}
				>
					<FormControlLabel value="female" control={<Radio />} label="Female" />
					<FormControlLabel value="male" control={<Radio />} label="Male" />
				</RadioGroup>
				{errors[name].length > 0 && <ErrorText value={errors[name]} />}
			</FormControl>
		</div>
	);
};

export default RadioButtonsGroup;