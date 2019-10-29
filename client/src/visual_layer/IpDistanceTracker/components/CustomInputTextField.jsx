import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  formControl: {
    margin: theme.spacing(1),
    width: 300,
  },
  inputError:{
     whiteSpace:'pre-line',
     color: theme.palette.error.main
  },
  inputLabel: {
    fontWeight: 600,
    fontSize: 16,
    color: theme.palette.primary.main
  }
}));


const CustomInputTextField = ({
  inputLabel,
  handleInputValueSet,
  buttonLabel,
  submitValidation,
  }) =>{

  const [inputValue, setInputValue] = React.useState('');
  const [inputError, setInputError] = React.useState('');
  const classes = useStyles();

  const handleChange = event => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(submitValidation){
        const errorMessages = submitValidation(inputValue);
        const numberOfErrors = errorMessages.length;
        if(numberOfErrors>0){
           const errors = numberOfErrors === 1 ?
            errorMessages[0] :
            errorMessages.join("\n");
          setInputError(errors);
        }else{
          setInputError('');
          handleInputValueSet(inputValue);
        }
    }else{
      handleInputValueSet(inputValue);
    }
  };


  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        { inputLabel &&
          <InputLabel
             htmlFor="custom-component"
             className={classes.inputLabel}
             >{inputLabel}</InputLabel> }
        <Input
          id="custom-component"
          value={inputValue}
          onChange={handleChange}
          aria-describedby="custom-component"
        />
        { inputError && <FormHelperText
                           id="custom-component"
                           className={classes.inputError}>{inputError}</FormHelperText> }
      </FormControl>
      { buttonLabel && <Button
                          onClick={handleSubmit}
                          disabled={!inputValue.length}
                          variant="contained"
                          size="medium"
                          color="primary">{buttonLabel}</Button> }
    </div>
  )
};

CustomInputTextField.propTypes ={
   inputLabel: PropTypes.string,
   handleInputValueSet: PropTypes.func.isRequired,
   buttonLabel: PropTypes.string,
   submitValidation: PropTypes.func
};

export default CustomInputTextField;

