import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  formControl: {
    margin: theme.spacing(1),
    width: 400,
    color: theme.palette.secondary.main
  },
  inputLabel: {
    fontWeight: 600,
    fontSize: 18,
    color: theme.palette.primary.main
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 120,
      color: '#52852d'
    },
  },
};

const CustomSelectList = ({
  inputLabel,
  handleListItemSelected,
  selectList,
  }) =>{
  const classes = useStyles();
  const [countryIP, setCountryIP] = React.useState('');

  const handleChange = event => {

    event.preventDefault();
    setCountryIP(event.target.value);
    handleListItemSelected(event.target.value);
  };

 return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel  className={classes.inputLabel} htmlFor="select-multiple">{inputLabel}</InputLabel>
        <Select
          value={countryIP}
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          {selectList.map(obj => (
            <MenuItem key={obj.value} value={obj}>
              {obj.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

CustomSelectList.propTypes ={
   inputLabel: PropTypes.string,
   handleListItemSelected: PropTypes.func.isRequired,
   selectList: PropTypes.array,
};

export default CustomSelectList;
