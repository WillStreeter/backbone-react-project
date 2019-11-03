import { ajax } from 'rxjs/ajax';

const API_URL = "http://api.ipapi.com/";

const ipApi = {
     fetchIpMetaData: (apiKey, ipAddress) => {
       return ajax(`${API_URL}${ipAddress}?access_key=${apiKey} `)
     }
};

export default { ipApi };
