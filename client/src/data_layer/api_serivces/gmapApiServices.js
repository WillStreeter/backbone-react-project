import { from } from "rxjs";

const API_URL = "http://api.ipapi.com/";
const myKey = '?access_key=AIzaSyBBbinkPqQfPWlsrhINX8T1uURss6lPg4g';
// https://medium.com/@chan.buena/how-to-use-google-distance-matrix-api-on-front-end-or-back-end-with-react-72d342f05733
// https://dev.to/zerquix18/let-s-play-with-google-maps-and-react-making-a-car-move-through-the-road-like-on-uber-part-1-4eo0
// https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react
// https://developers.google.com/maps/documentation/javascript/geometry#Distance
// https://github.com/gpacifico/Wynk/blob/master/src/components/ResultsPage.js

// google.maps.geometry.spherical.computeDistanceBetween
// belarus 31.148.248.

const gMapApi = {
  fetchGmapMetaData: (ipAddress) => {
    const request = fetch(`${API_URL}${ipAddress}${myKey}`).then(response => {
      return response.json();
    });

    return from(request);
  }
};

export default ipApi;
