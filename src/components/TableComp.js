import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles/index';
import Table from '@material-ui/core/Table/index';
import TableBody from '@material-ui/core/TableBody/index';
import TableCell from '@material-ui/core/TableCell/index';
import TableHead from '@material-ui/core/TableHead/index';
import TableRow from '@material-ui/core/TableRow/index';
import Paper from '@material-ui/core/Paper/index';

const StyledTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
}))(TableRow);

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(3),
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
}));

const CustomizedTables = (props) => {
	const classes = useStyles();
	const { tags, records } = props;
	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						{ tags && tags.map( (tag, index )=> <StyledTableCell key={index}>{tag}</StyledTableCell>) }
					</TableRow>
				</TableHead>
				<TableBody>
					{records && records.map((row, index) => (
						<StyledTableRow key={index}>
							<StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
							<StyledTableCell>{row.address}</StyledTableCell>
							<StyledTableCell>{row.phone}</StyledTableCell>
							<StyledTableCell>{row.email}</StyledTableCell>
							<StyledTableCell>{row.gender}</StyledTableCell>
							<StyledTableCell>{row.country}</StyledTableCell>
							<StyledTableCell>{row.note}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
};

export default CustomizedTables;