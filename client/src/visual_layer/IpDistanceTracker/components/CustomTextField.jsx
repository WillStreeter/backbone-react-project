import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'yellow',
    textAlign: 'center',
    color: 'purple',
    fontWeight: 800,
    fontSize: 18,
    lineHeight: 4,
    padding: theme.spacing(1),
    whiteSpace: 'normal'
  },

  rootError:{
    backgroundColor: 'white',
    textAlign: 'center',
    color: theme.palette.error.main,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 4,
    padding: theme.spacing(1),
    whiteSpace: 'normal'
  }


}));

const CustomTextField = ({ text, isError })=>{
  const classes = useStyles();
  const classStyle = isError?classes.rootError:classes.root;

  return <div className={classStyle}> {text} </div>;
};

CustomTextField.propTypes = {
   text: PropTypes.string,
   isError: PropTypes.bool,
};

export default CustomTextField;
