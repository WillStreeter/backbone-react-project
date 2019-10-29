import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CustomInputTextField from '../components/CustomInputTextField';
import CustomSelectList from '../components/CustomSelectList';
import {
   IpDistanceTrackerConnectService
} from "../../../business_layer/connect_services/IpDistanceTrackerConnectService";
import {
   validIpApiKey
} from "../../../business_layer/visual_layer_services/inputValidation";
import {
   COUNTRY_IP_SAMPLE_ADDRESSES
} from "../../../business_layer/visual_layer_services/countryIpTables";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import CustomTextField from "../components/CustomTextField";

const useStyles = {
    root: {
        padding: '5%',
        flexDirection: 'column',
        maxWidth: '60%',
        background: '#f2f2f7',
        margin: 'auto'
    },

};
class IpDistanceTrackerContainer extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    isApiKeyValid: PropTypes.bool,
    testApiKey: PropTypes.func,
    hasIpMetaInfo: PropTypes.object,
    hasIpMetaError: PropTypes.string,
    apiKeyError: PropTypes.string,
    isLoadingIpInfo: PropTypes.bool,
    fetchCountryIp: PropTypes.func,

  };

  handleApiKeySubmitTest = (key) =>{
     const { testApiKey } = this.props;
     testApiKey(key);
  };

  handleCountryIPSubmit = (country) =>{
     const { fetchCountryIp }  = this.props;
     fetchCountryIp(country.value);
  };

  getLocationMessage = () =>{
     const { hasIpMetaInfo } = this.props;
     if(hasIpMetaInfo.milesFromDC ){
         return `Pack your bags!\n
                 You're ${hasIpMetaInfo.milesFromDC} miles\n
                 from the USA
                 Location ${hasIpMetaInfo.city}, ${hasIpMetaInfo.country_code}`;
     }
     return `You're where you should be!\n
             Location ${hasIpMetaInfo.city}, ${hasIpMetaInfo.country_code}`;
  };


  render() {
  const {
      isApiKeyValid,
      hasIpMetaInfo,
      apiKeyError,
      classes
  } = this.props;
    return (
        <Paper className={classes.root}>
             {!isApiKeyValid  && <CustomInputTextField
                                    inputLabel="INSERT IP API KEY"
                                    handleInputValueSet={this.handleApiKeySubmitTest}
                                    buttonLabel="Test key"
                                    submitValidation={validIpApiKey}
                                    />}
             {apiKeyError  && <CustomTextField isError text={apiKeyError} />}
             {isApiKeyValid  && <CustomSelectList
                                   inputLabel="Select A country"
                                   handleListItemSelected={this.handleCountryIPSubmit}
                                   selectList={ COUNTRY_IP_SAMPLE_ADDRESSES }
                                  />}
             {hasIpMetaInfo && <CustomTextField text={this.getLocationMessage()}/>}

        </Paper>
    );
  }
}


IpDistanceTrackerContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles)(IpDistanceTrackerConnectService(IpDistanceTrackerContainer));
