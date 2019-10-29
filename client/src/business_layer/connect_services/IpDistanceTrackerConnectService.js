import { connect } from 'react-redux';
import {
  isApiKeyValid,
  hasIpMetaInfo,
  hasIpMetaError,
  apiKeyError,
  isLoadingIpInfo,
  } from "../../data_layer/redux_services/_ipapi_meta/ipApiSelectors";
import {
  testFetchWithApiKeyAttempt,
  fetchIpMetaAttempt
  } from "../../data_layer/redux_services/_ipapi_meta/ipApiActions";


const mapStateToProps = (state) => ({
  isApiKeyValid: isApiKeyValid(state),
  hasIpMetaInfo: hasIpMetaInfo(state),
  hasIpMetaError: hasIpMetaError(state),
  apiKeyError: apiKeyError(state),
  isLoadingIpInfo: isLoadingIpInfo(state),
});

const mapDispatchToProps = {
  testApiKey: testFetchWithApiKeyAttempt,
  fetchCountryIp: fetchIpMetaAttempt,
};


export const IpDistanceTrackerConnectService = ( containerToConnect )=>{
   return  connect(
      mapStateToProps,
      mapDispatchToProps
    )(containerToConnect);
};
