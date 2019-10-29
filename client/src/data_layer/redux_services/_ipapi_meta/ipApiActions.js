/*
 * action types
 */


export const FETCH_IP_META_ATTEMPT = 'FETCH_IP_META_ATTEMPT';
export const FETCH_IP_META_SUCCESS = 'FETCH_IP_META_ID_SUCCESS';
export const FETCH_IP_META_FAILURE = 'FETCH_IP_META_FAILURE';


export const TEST_FETCH_WITH_API_KEY_ATTEMPT = 'TEST_FETCH_WITH_API_KEY_ATTEMPT';
export const TEST_FETCH_WITH_API_KEY_SUCCESS = 'TEST_FETCH_WITH_API_KEY_SUCCESS';
export const TEST_FETCH_WITH_API_KEY_FAILURE = 'TEST_FETCH_WITH_API_KEY_FAILURE';


/*
 * action creators
 */
export function fetchIpMetaAttempt(ip) {
  return {
    type: FETCH_IP_META_ATTEMPT,
    payload:ip,
  }
}

export function fetchIpMetaSuccess(ipMetaResponse) {
  return {
    type: FETCH_IP_META_SUCCESS,
    payload: ipMetaResponse
  }
}

export function fetchIpMetaFailure(error) {
  return {
    type: FETCH_IP_META_FAILURE,
    payload: error
  }
}

export function testFetchWithApiKeyAttempt(ip) {
  return {
    type: TEST_FETCH_WITH_API_KEY_ATTEMPT,
    payload:ip,
  }
}

export function testFetchWithApiKeySuccess(apiKeyResponse) {
  return {
    type: TEST_FETCH_WITH_API_KEY_SUCCESS,
    payload: apiKeyResponse
  }
}

export function testFetchWithApiKeyFailure(error) {
  return {
    type: TEST_FETCH_WITH_API_KEY_FAILURE,
    payload: error
  }
}
