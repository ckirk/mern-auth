import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// MUI Imports
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const MuiTest = (props) => {

  const useStyles = makeStyles({
    root: {
      backgroundColor: 'teal',
      padding: '20px'
    }
  });

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Link to="/" className="col s5 brand-logo center black-text">
        MUI TEST
      </Link>
      <CircularProgress color="primary" size={24} thickness={5} />
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    // templateData: state.templateData.test
  };
};

export default connect(mapStateToProps)(MuiTest);
