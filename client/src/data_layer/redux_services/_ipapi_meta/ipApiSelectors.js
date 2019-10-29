import { createSelector } from 'reselect';


const ValidIpApiKey = state => state.ipApiReducer.validApiKey;
const IpMetaInfo = state => state.ipApiReducer.ipMetaInfo;
const IpMetaError = state => state.ipApiReducer.ipMetaError;
const ApiKeyError = state => state.ipApiReducer.apiKeyError;
const LoadingIpInfo = state => state.ipApiReducer.loadingIpInfo;

export const isApiKeyValid = createSelector(
  [ValidIpApiKey],
  (data) => Boolean(data)
);


export const hasIpMetaInfo = createSelector(
  [IpMetaInfo],
  (data) => data
);

export const hasIpMetaError = createSelector(
  [IpMetaError],
  (data) => data
);

export const apiKeyError= createSelector(
  [ApiKeyError],
  (data) => data
);

export const isLoadingIpInfo = createSelector(
  [LoadingIpInfo],
  (data) => data
);
