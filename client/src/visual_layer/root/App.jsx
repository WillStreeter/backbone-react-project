import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import  {
  default as IpDistanceTrackerContainer
  } from '../IpDistanceTracker/containers/IpDistanceTrackerContainer';
import theme from "./theme";
import store from "../../data_layer/redux_services";

const useStyles ={
  root: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems:'center'
  }
};

class App extends Component {

  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <div className={classes.root}>
            <Container>
                 <IpDistanceTrackerContainer />
            </Container>
          </div>
        </Provider>
      </ThemeProvider>
      );
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(useStyles)(App);
