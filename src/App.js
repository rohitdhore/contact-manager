import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ContactForm from './components/ContactForm';
import TableComp from './components/TableComp';
import styled from 'styled-components';
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const FormWrapper = styled.div`
  padding: 20px;
  margin: 10px;
  border: 1px solid #ccc;
`;

const TableCompStyled = styled(TableComp)`
  padding: 20px;
  margin: 10px;
`;

const App = (props) => {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormWrapper>
              <h1>Add new contact</h1>
              <ContactForm />
            </FormWrapper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TableCompStyled tags={['Name', 'Address', 'Phone', 'Email', 'Gender', 'Country', 'Note' ]} records={props.contacts}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contact.list
});

export default connect(mapStateToProps, null)(App);
