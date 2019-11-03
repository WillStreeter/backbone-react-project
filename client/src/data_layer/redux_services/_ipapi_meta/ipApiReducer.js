import {
  TEST_FETCH_WITH_API_KEY_ATTEMPT,
  TEST_FETCH_WITH_API_KEY_SUCCESS,
  TEST_FETCH_WITH_API_KEY_FAILURE,
  FETCH_IP_META_ATTEMPT,
  FETCH_IP_META_SUCCESS,
  FETCH_IP_META_FAILURE,
  } from "./ipApiActions";


// Reducer
export const initialState = {
  loadingIpInfo: false,
  validApiKey: undefined,
  apiKeyError: null,
  ipMetaError: null,
  ipMetaInfo: null,
};

export const IpApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_FETCH_WITH_API_KEY_ATTEMPT:
    case FETCH_IP_META_ATTEMPT: {
      return {
        ...state,
        apiKeyError: null,
        ipMetaError: null,
        loadingIpInfo: true
      };
    }

    case TEST_FETCH_WITH_API_KEY_SUCCESS: {

      return {
        ...state,
        error: null,
        loadingIpInfo: false,
        validApiKey: action.payload,
      };
    }

    case TEST_FETCH_WITH_API_KEY_FAILURE: {
        const { error } = action.payload;

        return {
          ...state,
          loadingIpInfo: false,
          apiKeyError: error.info,
        };
    }

    case FETCH_IP_META_SUCCESS: {

      return {
        ...state,
        ipMetaError: null,
        loadingIpInfo: false,
        ipMetaInfo: action.payload,
      };
    }

    case FETCH_IP_META_FAILURE: {
      const { results } = action.payload;

      return {
        ...state,
        loadingIpInfo: false,
        ipMetaError: results,
      };
    }
    default:
      return state;
  }
};
