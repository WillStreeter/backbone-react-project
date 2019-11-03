import { ActionsObservable } from 'redux-observable';
import ipApiServices  from '../../../api_services/ipApiServices';
import * as ipApiActions from '../ipApiActions';
import * as ipApiEpics from '../ipApiEpics';
import {IP_API_KEY_TEST } from "../../../../business_layer/data_layer_services/ipApiCheck";

const ipApiKeyTest='999999999999';

describe( 'IpApi Epics', ()=>{
   describe('testIpApiKey', ()=>{
      it('dispatches the correct action when it successful', (done)=>{

        const action$ = ActionsObservable.of(
            ipApiActions.testFetchWithApiKeyAttempt({ ip: ipApiKeyTest})
        );
        ipApiServices.ipApi = jest.fn();
        ipApiServices.ipApi.mockImplementation(() =>{
                return ActionsObservable.of(IP_API_KEY_TEST.result)
            });

        const expectedOutputActions = [
           ipApiActions.testFetchWithApiKeySuccess(ipApiKeyTest)
        ];

        ipApiEpics.testIpApiKey(action$, null).
        subscribe((actualOutputActions) =>{
                expect(actualOutputActions).toEqual(expectedOutputActions);
              }
            );
         done();
      })
   })
});

