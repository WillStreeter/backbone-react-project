import {
  initialState as InitialState,
  IpApiReducer
} from '../ipApiReducer';
import {IP_API_KEY_TEST } from "../../../../business_layer/data_layer_services/ipApiCheck";



import * as IpApiActions from '../ipApiActions';

describe('IpApi Reducer', ()=>{

   describe('INIT', ()=>{
      it('Should return initial state', ()=>{
        expect( IpApiReducer(
          undefined,
          {})).toEqual(
            InitialState
        );
      })
   });

   describe('TEST_FETCH_WITH_API_KEY_SUCCESS', ()=>{
      it('Should return API key fetch success state', ()=>{
        const action = IpApiActions.fetchIpMetaSuccess(IP_API_KEY_TEST.ip);
        const state = {...InitialState, validApiKey:IP_API_KEY_TEST.ip};
        expect( IpApiReducer(
          state,
          action)).toEqual(
            expect.objectContaining({validApiKey:IP_API_KEY_TEST.ip})
        );
      })
   });
});
