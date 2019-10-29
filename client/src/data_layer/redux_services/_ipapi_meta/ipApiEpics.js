import {  ofType } from "redux-observable";
import { of } from 'rxjs';
import { mergeMap, map, catchError } from "rxjs/operators";
import  ipApi from "../../api_serivces/ipApiServices";
import { IP_API_KEY_TEST,  } from "../../../business_layer/data_layer_services/ipApiCheck";
import { getDistanceInMiles }  from "../../../business_layer/data_layer_services/distanceCalculator";
import {
  TEST_FETCH_WITH_API_KEY_ATTEMPT ,
  TEST_FETCH_WITH_API_KEY_SUCCESS,
  TEST_FETCH_WITH_API_KEY_FAILURE,
  FETCH_IP_META_ATTEMPT,
  FETCH_IP_META_SUCCESS,
  FETCH_IP_META_FAILURE
  } from "./ipApiActions";


const resultIsValid = ( response ) =>{
    return (
       IP_API_KEY_TEST.result.longitude === response.longitude &&
       IP_API_KEY_TEST.result.latitude === response.latitude);
 };

// Epics
export const testIpApiKey = (action$, state$) => {
   return  action$.pipe(
    ofType(TEST_FETCH_WITH_API_KEY_ATTEMPT),
    mergeMap(action =>
      ipApi
        .fetchIpMetaData(action.payload, IP_API_KEY_TEST.ip)
        .pipe(
            map(({response}) => {
               if('error' in response === false &&
                   resultIsValid(response)){
                  return({
                        type: TEST_FETCH_WITH_API_KEY_SUCCESS,
                        payload:action.payload
                        })
               }else{
                  return({
                        type: TEST_FETCH_WITH_API_KEY_FAILURE,
                        payload: response
                        })
               }
            }),
            catchError(error => of({
               type:   TEST_FETCH_WITH_API_KEY_FAILURE,
               payload: error.xhr.response
               })
              ),
            )
    )
  );
};


export const fetchCountryOfIp = (action$, state$) => {
   return  action$.pipe(
    ofType(FETCH_IP_META_ATTEMPT),
    mergeMap(action =>{
      return ipApi
        .fetchIpMetaData(state$.value.ipApiReducer.validApiKey, action.payload)
        .pipe(
            map(({response}) => {
               if('error' in response === false){
                  if( response.country_code !== 'US'){
                      response['milesFromDC'] = getDistanceInMiles(response);
                  }
                  return({
                        type: FETCH_IP_META_SUCCESS,
                        payload:response
                        })
               }else{
                  return({
                        type: FETCH_IP_META_FAILURE,
                        payload: response
                        })
               }
            }),
            catchError(error => of({
               type:   TEST_FETCH_WITH_API_KEY_FAILURE,
               payload: error.xhr.response
               })
              ),
            )
    })
  );
};
